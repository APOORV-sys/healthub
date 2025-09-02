const HealthData = require('../models/HealthData');

exports.logHealthData = async (req, res) => {
  try {
    const healthData = new HealthData({
      userId: req.user.id,
      ...req.body
    });
    
    await healthData.save();
    res.status(201).json({ message: 'Health data logged successfully', data: healthData });
  } catch (error) {
    res.status(500).json({ message: 'Error logging health data', error: error.message });
  }
};

exports.getHealthData = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const query = { userId: req.user.id };
    
    if (startDate && endDate) {
      query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    
    const healthData = await HealthData.find(query).sort({ date: -1 });
    res.json(healthData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching health data', error: error.message });
  }
};

exports.getHealthTrends = async (req, res) => {
  try {
    const trends = await HealthData.aggregate([
      { $match: { userId: mongoose.Types.ObjectId(req.user.id) } },
      { $sort: { date: -1 } },
      { $limit: 30 },
      {
        $project: {
          date: 1,
          'vitals.bloodPressure.systolic': 1,
          'vitals.bloodPressure.diastolic': 1,
          'vitals.weight': 1,
          'vitals.bloodSugar': 1
        }
      }
    ]);
    
    res.json(trends);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching health trends', error: error.message });
  }
};


