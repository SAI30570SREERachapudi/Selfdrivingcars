export const UNITS = [
  { id: 1, name: "Unit 1: Introduction to Self-Driving Cars", range: "1–25", total: 25 },
  { id: 2, name: "Unit 2: State Estimation and Localization", range: "26–50", total: 25 },
  { id: 3, name: "Unit 3: Visual Perception for Self-Driving Cars", range: "51–75", total: 25 },
  { id: 4, name: "Unit 4: Motion Planning for Self-Driving Cars", range: "76–100", total: 25 },
];

export const questions = [
  // UNIT 1: INTRODUCTION TO SELF-DRIVING CARS (Questions 1–25)
  {
    id: 1,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "What is the primary objective of a self-driving car?",
    options: {
      A: "Increase vehicle weight",
      B: "Navigate and operate without continuous human intervention",
      C: "Reduce vehicle speed permanently",
      D: "Eliminate vehicle sensors"
    },
    correctAnswer: "B"
  },
  {
    id: 2,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which organization introduced the widely recognized six levels of driving automation (0–5)?",
    options: {
      A: "IEEE",
      B: "ISO",
      C: "SAE International",
      D: "NASA"
    },
    correctAnswer: "C"
  },
  {
    id: 3,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which SAE automation level represents full driving automation?",
    options: {
      A: "Level 2",
      B: "Level 3",
      C: "Level 4",
      D: "Level 5"
    },
    correctAnswer: "D"
  },
  {
    id: 4,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which of the following is an essential component of autonomous vehicle perception?",
    options: {
      A: "Camera",
      B: "Printer",
      C: "Keyboard",
      D: "Speaker"
    },
    correctAnswer: "A"
  },
  {
    id: 5,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "What is the main function of perception in autonomous driving?",
    options: {
      A: "Control fuel consumption only",
      B: "Understand the surrounding environment",
      C: "Increase engine temperature",
      D: "Manage vehicle taxation"
    },
    correctAnswer: "B"
  },
  {
    id: 6,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which sensor is commonly used to generate 3D point clouds?",
    options: {
      A: "Microphone",
      B: "LiDAR",
      C: "Keyboard",
      D: "GPS antenna only"
    },
    correctAnswer: "B"
  },
  {
    id: 7,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "What does LiDAR stand for?",
    options: {
      A: "Light Detection and Ranging",
      B: "Linear Data and Radar",
      C: "Light Digital Recognition",
      D: "Location Detection and Reading"
    },
    correctAnswer: "A"
  },
  {
    id: 8,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which component is responsible for making driving decisions?",
    options: {
      A: "Decision-making and planning module",
      B: "Audio system",
      C: "Entertainment system",
      D: "Battery charger"
    },
    correctAnswer: "A"
  },
  {
    id: 9,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "What is the primary purpose of vehicle dynamic modeling?",
    options: {
      A: "Design vehicle paint",
      B: "Understand vehicle motion and behavior",
      C: "Increase tire size",
      D: "Control music volume"
    },
    correctAnswer: "B"
  },
  {
    id: 10,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which equation represents basic longitudinal motion?",
    options: {
      A: "F = ma",
      B: "P = VI",
      C: "V = IR",
      D: "E = mc²"
    },
    correctAnswer: "A"
  },
  {
    id: 11,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Longitudinal vehicle control primarily manages:",
    options: {
      A: "Steering direction",
      B: "Acceleration and braking",
      C: "Headlight brightness",
      D: "Vehicle color"
    },
    correctAnswer: "B"
  },
  {
    id: 12,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Lateral vehicle control is mainly responsible for:",
    options: {
      A: "Steering and lane positioning",
      B: "Fuel injection only",
      C: "Audio control",
      D: "Battery charging"
    },
    correctAnswer: "A"
  },
  {
    id: 13,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which actuator is commonly used for steering control?",
    options: {
      A: "Electric power steering actuator",
      B: "Loudspeaker",
      C: "Display monitor",
      D: "Cooling fan"
    },
    correctAnswer: "A"
  },
  {
    id: 14,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which of the following is an example of a vehicle control system?",
    options: {
      A: "PID controller",
      B: "Word processor",
      C: "Web browser",
      D: "Text editor"
    },
    correctAnswer: "A"
  },
  {
    id: 15,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "What is the primary function of the braking system in autonomous vehicles?",
    options: {
      A: "Increase acceleration",
      B: "Reduce vehicle speed or stop the vehicle",
      C: "Detect road signs",
      D: "Generate maps"
    },
    correctAnswer: "B"
  },
  {
    id: 16,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which sensor is commonly used to detect surrounding objects using radio waves?",
    options: {
      A: "Radar",
      B: "Keyboard",
      C: "Printer",
      D: "Speaker"
    },
    correctAnswer: "A"
  },
  {
    id: 17,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "What does ECU stand for?",
    options: {
      A: "Electronic Control Unit",
      B: "Engine Communication Utility",
      C: "Electrical Computing Unit",
      D: "External Control Utility"
    },
    correctAnswer: "A"
  },
  {
    id: 18,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which technology is commonly used for vehicle-to-vehicle communication?",
    options: {
      A: "V2V communication",
      B: "USB printing",
      C: "Bluetooth audio only",
      D: "HDMI"
    },
    correctAnswer: "A"
  },
  {
    id: 19,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "What is the main purpose of a vehicle software architecture?",
    options: {
      A: "Organize software components and their interactions",
      B: "Change vehicle appearance",
      C: "Increase tire pressure",
      D: "Design vehicle seats"
    },
    correctAnswer: "A"
  },
  {
    id: 20,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which of the following affects vehicle lateral dynamics?",
    options: {
      A: "Steering angle",
      B: "Screen brightness",
      C: "Audio frequency",
      D: "Seat color"
    },
    correctAnswer: "A"
  },
  {
    id: 21,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "What does the term ADAS represent?",
    options: {
      A: "Advanced Driver Assistance Systems",
      B: "Automatic Digital Audio System",
      C: "Advanced Data Analysis Software",
      D: "Autonomous Driving Application Service"
    },
    correctAnswer: "A"
  },
  {
    id: 22,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which control technique is widely used in vehicle speed control?",
    options: {
      A: "PID control",
      B: "Image compression",
      C: "Sorting algorithm",
      D: "Encryption"
    },
    correctAnswer: "A"
  },
  {
    id: 23,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "What is the purpose of a throttle actuator?",
    options: {
      A: "Control engine or motor power demand",
      B: "Detect pedestrians",
      C: "Generate GPS coordinates",
      D: "Measure road width"
    },
    correctAnswer: "A"
  },
  {
    id: 24,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which system integrates perception, planning and control?",
    options: {
      A: "Autonomous driving system",
      B: "Audio processing system",
      C: "Office automation system",
      D: "Database management system"
    },
    correctAnswer: "A"
  },
  {
    id: 25,
    unit: 1,
    unitName: "Introduction to Self-Driving Cars",
    question: "Which of the following is a major challenge in autonomous driving?",
    options: {
      A: "Unpredictable road conditions",
      B: "Keyboard layout",
      C: "Printer speed",
      D: "Monitor resolution"
    },
    correctAnswer: "A"
  },

  // UNIT 2: STATE ESTIMATION AND LOCALIZATION FOR SELF-DRIVING CARS (Questions 26–50)
  {
    id: 26,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What is state estimation in autonomous vehicles?",
    options: {
      A: "Estimating the vehicle's internal state from sensor measurements",
      B: "Measuring vehicle color",
      C: "Calculating fuel price",
      D: "Managing music files"
    },
    correctAnswer: "A"
  },
  {
    id: 27,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What does localization determine?",
    options: {
      A: "Vehicle position and orientation",
      B: "Vehicle manufacturing cost",
      C: "Tire brand",
      D: "Battery color"
    },
    correctAnswer: "A"
  },
  {
    id: 28,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "Which algorithm is widely used for state estimation?",
    options: {
      A: "Kalman Filter",
      B: "Bubble Sort",
      C: "Binary Search",
      D: "Merge Sort"
    },
    correctAnswer: "A"
  },
  {
    id: 29,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "The Kalman Filter is primarily designed for:",
    options: {
      A: "Estimating system states from noisy measurements",
      B: "Compressing images",
      C: "Generating sound",
      D: "Designing websites"
    },
    correctAnswer: "A"
  },
  {
    id: 30,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "Which Kalman Filter is suitable for linear systems with Gaussian noise?",
    options: {
      A: "Extended Kalman Filter",
      B: "Standard Linear Kalman Filter",
      C: "Particle Filter only",
      D: "Median Filter"
    },
    correctAnswer: "B"
  },
  {
    id: 31,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What does EKF stand for?",
    options: {
      A: "Extended Kalman Filter",
      B: "Electronic Kinematic Function",
      C: "Estimated Knowledge Framework",
      D: "External Kalman Function"
    },
    correctAnswer: "A"
  },
  {
    id: 32,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "The Extended Kalman Filter is commonly used for:",
    options: {
      A: "Nonlinear systems",
      B: "Text processing",
      C: "Database queries",
      D: "Audio recording"
    },
    correctAnswer: "A"
  },
  {
    id: 33,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "Which mathematical operation is used in EKF to approximate nonlinear functions?",
    options: {
      A: "Taylor series linearization",
      B: "Sorting",
      C: "Encryption",
      D: "Compression"
    },
    correctAnswer: "A"
  },
  {
    id: 34,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What does GNSS stand for?",
    options: {
      A: "Global Navigation Satellite System",
      B: "General Network Sensor System",
      C: "Global Numerical Software System",
      D: "Ground Navigation Signal Service"
    },
    correctAnswer: "A"
  },
  {
    id: 35,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What is the primary purpose of GNSS in autonomous vehicles?",
    options: {
      A: "Position estimation",
      B: "Engine cooling",
      C: "Steering actuation",
      D: "Image classification"
    },
    correctAnswer: "A"
  },
  {
    id: 36,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What does INS stand for?",
    options: {
      A: "Inertial Navigation System",
      B: "Intelligent Network Service",
      C: "Internal Number System",
      D: "Integrated Notification Software"
    },
    correctAnswer: "A"
  },
  {
    id: 37,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "Which sensors are commonly used in INS?",
    options: {
      A: "Accelerometers and gyroscopes",
      B: "Printers and scanners",
      C: "Cameras and microphones only",
      D: "Speakers and displays"
    },
    correctAnswer: "A"
  },
  {
    id: 38,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What does an accelerometer measure?",
    options: {
      A: "Acceleration",
      B: "Temperature only",
      C: "Distance only",
      D: "Humidity"
    },
    correctAnswer: "A"
  },
  {
    id: 39,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What does a gyroscope measure?",
    options: {
      A: "Angular velocity",
      B: "Linear temperature",
      C: "Fuel quantity",
      D: "Tire pressure"
    },
    correctAnswer: "A"
  },
  {
    id: 40,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What is pose estimation?",
    options: {
      A: "Estimating position and orientation",
      B: "Estimating engine cost",
      C: "Measuring vehicle height only",
      D: "Detecting sound"
    },
    correctAnswer: "A"
  },
  {
    id: 41,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What is sensor fusion?",
    options: {
      A: "Combining data from multiple sensors",
      B: "Removing all sensors",
      C: "Increasing vehicle weight",
      D: "Replacing software with hardware"
    },
    correctAnswer: "A"
  },
  {
    id: 42,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "Which combination is commonly used for robust localization?",
    options: {
      A: "GNSS and INS",
      B: "Keyboard and mouse",
      C: "Printer and scanner",
      D: "Speaker and microphone"
    },
    correctAnswer: "A"
  },
  {
    id: 43,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What is the main limitation of GNSS in urban environments?",
    options: {
      A: "Signal blockage and multipath effects",
      B: "Excessive engine power",
      C: "High tire friction",
      D: "Low battery voltage only"
    },
    correctAnswer: "A"
  },
  {
    id: 44,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What is LiDAR point cloud data?",
    options: {
      A: "Collection of 3D spatial points",
      B: "Collection of audio signals",
      C: "Collection of text documents",
      D: "Collection of video subtitles"
    },
    correctAnswer: "A"
  },
  {
    id: 45,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "Which algorithm is often used for LiDAR-based point cloud registration?",
    options: {
      A: "ICP",
      B: "KNN text search",
      C: "Bubble Sort",
      D: "RSA"
    },
    correctAnswer: "A"
  },
  {
    id: 46,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What does ICP stand for?",
    options: {
      A: "Iterative Closest Point",
      B: "Intelligent Control Program",
      C: "Integrated Camera Processing",
      D: "Internal Coordinate Position"
    },
    correctAnswer: "A"
  },
  {
    id: 47,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What is the purpose of a covariance matrix in Kalman filtering?",
    options: {
      A: "Represent uncertainty and correlations in estimates",
      B: "Store image colors",
      C: "Control vehicle lights",
      D: "Generate sound"
    },
    correctAnswer: "A"
  },
  {
    id: 48,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "Which step follows prediction in a standard Kalman Filter cycle?",
    options: {
      A: "Measurement update",
      B: "Image compression",
      C: "Sorting",
      D: "Data encryption"
    },
    correctAnswer: "A"
  },
  {
    id: 49,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What is dead reckoning?",
    options: {
      A: "Estimating position using previous state and motion measurements",
      B: "Detecting road signs",
      C: "Generating maps from images only",
      D: "Controlling vehicle headlights"
    },
    correctAnswer: "A"
  },
  {
    id: 50,
    unit: 2,
    unitName: "State Estimation and Localization",
    question: "What is the major advantage of combining GNSS, INS and LiDAR?",
    options: {
      A: "Improved localization robustness and accuracy",
      B: "Reduced need for all software",
      C: "Elimination of vehicle dynamics",
      D: "Removal of all uncertainty"
    },
    correctAnswer: "A"
  },

  // UNIT 3: VISUAL PERCEPTION FOR SELF-DRIVING CARS (Questions 51–75)
  {
    id: 51,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What is computer vision?",
    options: {
      A: "Enabling computers to interpret visual information",
      B: "Controlling vehicle speed only",
      C: "Managing databases",
      D: "Processing keyboard inputs"
    },
    correctAnswer: "A"
  },
  {
    id: 52,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What is the primary purpose of visual perception in self-driving cars?",
    options: {
      A: "Understand road scenes and detect objects",
      B: "Increase engine temperature",
      C: "Control music",
      D: "Reduce tire size"
    },
    correctAnswer: "A"
  },
  {
    id: 53,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "Which sensor is commonly used for visual perception?",
    options: {
      A: "Camera",
      B: "Microphone",
      C: "Speaker",
      D: "Keyboard"
    },
    correctAnswer: "A"
  },
  {
    id: 54,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What does 3D computer vision attempt to estimate?",
    options: {
      A: "Three-dimensional structure of a scene",
      B: "Only text information",
      C: "Audio frequencies",
      D: "Vehicle fuel consumption"
    },
    correctAnswer: "A"
  },
  {
    id: 55,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What is a feature detector?",
    options: {
      A: "Algorithm that identifies distinctive image locations",
      B: "Algorithm that controls braking",
      C: "Tool for measuring fuel",
      D: "Device for measuring temperature"
    },
    correctAnswer: "A"
  },
  {
    id: 56,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "Which is an example of a feature detection algorithm?",
    options: {
      A: "SIFT",
      B: "PID",
      C: "EKF",
      D: "ICP"
    },
    correctAnswer: "A"
  },
  {
    id: 57,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What does SIFT stand for?",
    options: {
      A: "Scale-Invariant Feature Transform",
      B: "Sensor Integrated Feature Tracking",
      C: "System Image Filtering Technique",
      D: "Spatial Information Feature Tool"
    },
    correctAnswer: "A"
  },
  {
    id: 58,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What is the purpose of feature matching?",
    options: {
      A: "Find corresponding features between images",
      B: "Control the steering wheel",
      C: "Measure tire pressure",
      D: "Estimate battery temperature"
    },
    correctAnswer: "A"
  },
  {
    id: 59,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "Which algorithm is commonly used for corner detection?",
    options: {
      A: "Harris Corner Detector",
      B: "Kalman Filter",
      C: "PID Controller",
      D: "Dijkstra Algorithm"
    },
    correctAnswer: "A"
  },
  {
    id: 60,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What does CNN stand for?",
    options: {
      A: "Convolutional Neural Network",
      B: "Computer Navigation Node",
      C: "Central Network Number",
      D: "Connected Numerical Network"
    },
    correctAnswer: "A"
  },
  {
    id: 61,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "Which neural network architecture is widely used for image classification?",
    options: {
      A: "CNN",
      B: "Linear regression only",
      C: "Decision tree only",
      D: "Hash table"
    },
    correctAnswer: "A"
  },
  {
    id: 62,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What is a feedforward neural network?",
    options: {
      A: "Information flows from input to output without feedback cycles",
      B: "Information flows only backward",
      C: "Network without neurons",
      D: "Network used only for databases"
    },
    correctAnswer: "A"
  },
  {
    id: 63,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "Which activation function is commonly used in hidden layers of neural networks?",
    options: {
      A: "ReLU",
      B: "SQL",
      C: "HTML",
      D: "XML"
    },
    correctAnswer: "A"
  },
  {
    id: 64,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What is object detection?",
    options: {
      A: "Identifying and locating objects in an image",
      B: "Measuring engine temperature",
      C: "Calculating vehicle speed only",
      D: "Compressing audio"
    },
    correctAnswer: "A"
  },
  {
    id: 65,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "Which output is commonly generated by a 2D object detection model?",
    options: {
      A: "Bounding boxes and class labels",
      B: "Only audio files",
      C: "Vehicle manufacturing data",
      D: "GPS satellite signals"
    },
    correctAnswer: "A"
  },
  {
    id: 66,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "Which of the following is an object detection algorithm?",
    options: {
      A: "YOLO",
      B: "EKF",
      C: "ICP",
      D: "PID"
    },
    correctAnswer: "A"
  },
  {
    id: 67,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What does YOLO stand for?",
    options: {
      A: "You Only Look Once",
      B: "Your Object Location Output",
      C: "Yearly Object Learning Operation",
      D: "Young Online Learning Object"
    },
    correctAnswer: "A"
  },
  {
    id: 68,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What is semantic segmentation?",
    options: {
      A: "Assigning a class label to each pixel",
      B: "Identifying only image filenames",
      C: "Compressing image files",
      D: "Detecting sound signals"
    },
    correctAnswer: "A"
  },
  {
    id: 69,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "Which task is an example of semantic segmentation?",
    options: {
      A: "Classifying road, sidewalk and vehicles pixel by pixel",
      B: "Measuring fuel level",
      C: "Calculating vehicle speed",
      D: "Detecting battery voltage"
    },
    correctAnswer: "A"
  },
  {
    id: 70,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "Which neural network architecture is commonly used for semantic segmentation?",
    options: {
      A: "U-Net",
      B: "Linear search",
      C: "Bubble Sort",
      D: "RSA"
    },
    correctAnswer: "A"
  },
  {
    id: 71,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What is the purpose of an image bounding box?",
    options: {
      A: "Specify the location of an object",
      B: "Calculate vehicle fuel consumption",
      C: "Control the accelerator",
      D: "Measure road temperature"
    },
    correctAnswer: "A"
  },
  {
    id: 72,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What does IoU represent in object detection?",
    options: {
      A: "Intersection over Union",
      B: "Input of Unit",
      C: "Image Output Utility",
      D: "Integrated Object Unit"
    },
    correctAnswer: "A"
  },
  {
    id: 73,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "Which metric is commonly used to evaluate object detection performance?",
    options: {
      A: "Mean Average Precision (mAP)",
      B: "Vehicle horsepower",
      C: "Fuel efficiency",
      D: "Tire diameter"
    },
    correctAnswer: "A"
  },
  {
    id: 74,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "What is the purpose of non-maximum suppression (NMS)?",
    options: {
      A: "Remove redundant overlapping detection boxes",
      B: "Increase image brightness",
      C: "Increase vehicle acceleration",
      D: "Remove all detected objects"
    },
    correctAnswer: "A"
  },
  {
    id: 75,
    unit: 3,
    unitName: "Visual Perception for Self-Driving Cars",
    question: "Which dataset is widely used for autonomous driving computer vision research?",
    options: {
      A: "KITTI",
      B: "MNIST only",
      C: "IMDB Reviews",
      D: "CIFAR-10 only"
    },
    correctAnswer: "A"
  },

  // UNIT 4: MOTION PLANNING FOR SELF-DRIVING CARS (Questions 76–100)
  {
    id: 76,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is motion planning in autonomous vehicles?",
    options: {
      A: "Finding a safe and feasible path or trajectory",
      B: "Increasing engine temperature",
      C: "Controlling vehicle entertainment",
      D: "Designing vehicle interiors"
    },
    correctAnswer: "A"
  },
  {
    id: 77,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is the primary objective of mission planning?",
    options: {
      A: "Determine a high-level route from source to destination",
      B: "Control music volume",
      C: "Measure tire pressure",
      D: "Detect vehicle color"
    },
    correctAnswer: "A"
  },
  {
    id: 78,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "Which algorithm is commonly used for shortest-path planning?",
    options: {
      A: "Dijkstra's algorithm",
      B: "Bubble Sort",
      C: "RSA",
      D: "K-means only"
    },
    correctAnswer: "A"
  },
  {
    id: 79,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What does A* algorithm use to guide pathfinding?",
    options: {
      A: "Cost function and heuristic function",
      B: "Audio signals",
      C: "Image brightness only",
      D: "Vehicle temperature"
    },
    correctAnswer: "A"
  },
  {
    id: 80,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is a road map in autonomous driving?",
    options: {
      A: "Representation of road networks and driving structure",
      B: "A vehicle maintenance record",
      C: "A list of music files",
      D: "A battery charging schedule"
    },
    correctAnswer: "A"
  },
  {
    id: 81,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is an HD map?",
    options: {
      A: "High-definition map containing detailed road information",
      B: "High-speed internet map",
      C: "Human driving manual",
      D: "Hardware design map"
    },
    correctAnswer: "A"
  },
  {
    id: 82,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "Which information can be stored in an HD map?",
    options: {
      A: "Lane boundaries, road geometry and traffic signs",
      B: "Only vehicle color",
      C: "Driver's music preference",
      D: "Engine manufacturing date only"
    },
    correctAnswer: "A"
  },
  {
    id: 83,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is behavior planning?",
    options: {
      A: "Selecting driving actions such as lane changing and overtaking",
      B: "Controlling audio output",
      C: "Designing vehicle seats",
      D: "Managing battery charging only"
    },
    correctAnswer: "A"
  },
  {
    id: 84,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "Which is an example of a driving behavior?",
    options: {
      A: "Lane changing",
      B: "Image compression",
      C: "File sorting",
      D: "Database backup"
    },
    correctAnswer: "A"
  },
  {
    id: 85,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is reactive planning?",
    options: {
      A: "Making immediate decisions based on the current environment",
      B: "Planning only once during vehicle manufacturing",
      C: "Ignoring moving objects",
      D: "Following a fixed path regardless of obstacles"
    },
    correctAnswer: "A"
  },
  {
    id: 86,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is a dynamic obstacle?",
    options: {
      A: "Moving vehicle or pedestrian",
      B: "Stationary wall",
      C: "Road marking",
      D: "Traffic sign"
    },
    correctAnswer: "A"
  },
  {
    id: 87,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "Which algorithm is widely used for sampling-based motion planning?",
    options: {
      A: "RRT",
      B: "PID",
      C: "SIFT",
      D: "EKF"
    },
    correctAnswer: "A"
  },
  {
    id: 88,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What does RRT stand for?",
    options: {
      A: "Rapidly-exploring Random Tree",
      B: "Road Recognition Technology",
      C: "Real-time Routing Technique",
      D: "Reactive Road Tracking"
    },
    correctAnswer: "A"
  },
  {
    id: 89,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is the purpose of collision avoidance?",
    options: {
      A: "Prevent collisions with obstacles and other road users",
      B: "Increase vehicle speed at all times",
      C: "Reduce road width",
      D: "Disable braking"
    },
    correctAnswer: "A"
  },
  {
    id: 90,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is a trajectory in autonomous driving?",
    options: {
      A: "A time-dependent sequence of vehicle positions and motions",
      B: "A vehicle registration document",
      C: "A road tax receipt",
      D: "A list of sensors"
    },
    correctAnswer: "A"
  },
  {
    id: 91,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "Which of the following is important for smooth trajectory planning?",
    options: {
      A: "Continuity in position, velocity and acceleration",
      B: "Random steering changes",
      C: "Sudden braking at every point",
      D: "Ignoring road boundaries"
    },
    correctAnswer: "A"
  },
  {
    id: 92,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is the purpose of local planning?",
    options: {
      A: "Generate a short-term feasible trajectory around nearby obstacles",
      B: "Select the vehicle manufacturer",
      C: "Calculate annual maintenance cost",
      D: "Create a national highway database"
    },
    correctAnswer: "A"
  },
  {
    id: 93,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "Which algorithm is commonly used for trajectory optimization?",
    options: {
      A: "Model Predictive Control (MPC)",
      B: "Bubble Sort",
      C: "Linear Search",
      D: "Hashing"
    },
    correctAnswer: "A"
  },
  {
    id: 94,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is MPC?",
    options: {
      A: "Model Predictive Control",
      B: "Motion Processing Camera",
      C: "Map Position Calculator",
      D: "Multi-Point Communication"
    },
    correctAnswer: "A"
  },
  {
    id: 95,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is the main advantage of MPC?",
    options: {
      A: "It predicts future system behavior while optimizing control actions",
      B: "It eliminates the need for sensors",
      C: "It works only with static objects",
      D: "It does not require a vehicle model"
    },
    correctAnswer: "A"
  },
  {
    id: 96,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is a cost function in motion planning?",
    options: {
      A: "Mathematical measure used to evaluate candidate trajectories",
      B: "Vehicle purchase price",
      C: "Road construction budget",
      D: "Fuel station bill"
    },
    correctAnswer: "A"
  },
  {
    id: 97,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "Which factors are commonly considered in trajectory optimization?",
    options: {
      A: "Safety, comfort and efficiency",
      B: "Vehicle paint only",
      C: "Music quality",
      D: "Seat material"
    },
    correctAnswer: "A"
  },
  {
    id: 98,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is the purpose of dynamic object interaction modeling?",
    options: {
      A: "Predict and account for movements of other road users",
      B: "Detect vehicle color only",
      C: "Control dashboard brightness",
      D: "Measure engine oil level"
    },
    correctAnswer: "A"
  },
  {
    id: 99,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "Which of the following is an important consideration during lane changing?",
    options: {
      A: "Distance and relative velocity of surrounding vehicles",
      B: "Vehicle logo",
      C: "Music volume",
      D: "Dashboard color"
    },
    correctAnswer: "A"
  },
  {
    id: 100,
    unit: 4,
    unitName: "Motion Planning for Self-Driving Cars",
    question: "What is the ultimate goal of smooth local planning?",
    options: {
      A: "Generate safe, comfortable and dynamically feasible vehicle trajectories",
      B: "Increase sudden steering movements",
      C: "Ignore traffic rules",
      D: "Maximize acceleration in every situation"
    },
    correctAnswer: "A"
  }
];

