import express from 'express';
const router = express.Router();

import sensorController from '../controllers/sensorController';

router.get('/info', sensorController.getAllSensor);
router.get('/info/:sensorId', sensorController.getSensorInfo);
router.get('/data/chart/:sensorId', sensorController.sendDataChart);
router.get('/data/page/:sensorId', sensorController.getPageSensorData);
router.get('/data/last/:sensorId', sensorController.sendLastValue);
router.get('/data/new/:sensorId', sensorController.getLastValueWithSensor);
router.get('/data/page/outThreshold/:sensorId', sensorController.getPageOutThresholdData);

export default router;
