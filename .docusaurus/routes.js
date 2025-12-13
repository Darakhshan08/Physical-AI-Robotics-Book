import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c8e'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '325'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd1b'),
            routes: [
              {
                path: '/docs/appendices/cloud-setup',
                component: ComponentCreator('/docs/appendices/cloud-setup', '043'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/appendices/glossary',
                component: ComponentCreator('/docs/appendices/glossary', '6d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/appendices/hardware-setup',
                component: ComponentCreator('/docs/appendices/hardware-setup', '039'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/appendices/resources',
                component: ComponentCreator('/docs/appendices/resources', '74a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/appendices/troubleshooting',
                component: ComponentCreator('/docs/appendices/troubleshooting', 'f31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/capstone/capstone-architecture',
                component: ComponentCreator('/docs/capstone/capstone-architecture', 'bf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/capstone/capstone-deployment',
                component: ComponentCreator('/docs/capstone/capstone-deployment', 'bdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/capstone/capstone-integration',
                component: ComponentCreator('/docs/capstone/capstone-integration', '154'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/capstone/capstone-manipulation',
                component: ComponentCreator('/docs/capstone/capstone-manipulation', 'bb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/capstone/capstone-navigation',
                component: ComponentCreator('/docs/capstone/capstone-navigation', 'c90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/capstone/capstone-overview',
                component: ComponentCreator('/docs/capstone/capstone-overview', '820'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/capstone/voice-pipeline',
                component: ComponentCreator('/docs/capstone/voice-pipeline', '0c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/appendices',
                component: ComponentCreator('/docs/category/appendices', '00f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/part-1-the-robotic-nervous-system---ros-2',
                component: ComponentCreator('/docs/category/part-1-the-robotic-nervous-system---ros-2', '675'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/part-2-the-digital-twin---gazebo--unity',
                component: ComponentCreator('/docs/category/part-2-the-digital-twin---gazebo--unity', '9aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/part-3-the-ai-robot-brain---nvidia-isaac',
                component: ComponentCreator('/docs/category/part-3-the-ai-robot-brain---nvidia-isaac', 'a60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/part-4-vision-language-action---vla',
                component: ComponentCreator('/docs/category/part-4-vision-language-action---vla', 'a35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/part-5-capstone-project',
                component: ComponentCreator('/docs/category/part-5-capstone-project', '1bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/course-overview',
                component: ComponentCreator('/docs/introduction/course-overview', 'ccd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/environment-setup',
                component: ComponentCreator('/docs/introduction/environment-setup', '171'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/what-is-physical-ai',
                component: ComponentCreator('/docs/introduction/what-is-physical-ai', 'ac5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/why-humanoid-robots',
                component: ComponentCreator('/docs/introduction/why-humanoid-robots', '7d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/architecture',
                component: ComponentCreator('/docs/module-1-ros2/architecture', '288'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/bridging-agents',
                component: ComponentCreator('/docs/module-1-ros2/bridging-agents', 'aaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/launch-files',
                component: ComponentCreator('/docs/module-1-ros2/launch-files', 'c0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/nodes-topics-services',
                component: ComponentCreator('/docs/module-1-ros2/nodes-topics-services', '761'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/python-packages',
                component: ComponentCreator('/docs/module-1-ros2/python-packages', '67a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/urdf-humanoids',
                component: ComponentCreator('/docs/module-1-ros2/urdf-humanoids', '965'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/gazebo-setup',
                component: ComponentCreator('/docs/module-2-simulation/gazebo-setup', 'dde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/hri-simulation',
                component: ComponentCreator('/docs/module-2-simulation/hri-simulation', 'ce3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/physics-simulation',
                component: ComponentCreator('/docs/module-2-simulation/physics-simulation', 'fae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/sensor-simulation',
                component: ComponentCreator('/docs/module-2-simulation/sensor-simulation', '8df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/unity-rendering',
                component: ComponentCreator('/docs/module-2-simulation/unity-rendering', 'db9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/urdf-sdf',
                component: ComponentCreator('/docs/module-2-simulation/urdf-sdf', 'e2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-isaac/isaac-overview',
                component: ComponentCreator('/docs/module-3-isaac/isaac-overview', '860'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-isaac/nav2',
                component: ComponentCreator('/docs/module-3-isaac/nav2', 'd2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-isaac/reinforcement-learning',
                component: ComponentCreator('/docs/module-3-isaac/reinforcement-learning', '5f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-isaac/sim-to-real',
                component: ComponentCreator('/docs/module-3-isaac/sim-to-real', '7d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-isaac/synthetic-data',
                component: ComponentCreator('/docs/module-3-isaac/synthetic-data', 'df1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-isaac/vslam',
                component: ComponentCreator('/docs/module-3-isaac/vslam', '556'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/cognitive-planning',
                component: ComponentCreator('/docs/module-4-vla/cognitive-planning', '009'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/conversational-ai',
                component: ComponentCreator('/docs/module-4-vla/conversational-ai', '609'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/kinematics',
                component: ComponentCreator('/docs/module-4-vla/kinematics', 'c90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/locomotion',
                component: ComponentCreator('/docs/module-4-vla/locomotion', 'e71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/manipulation',
                component: ComponentCreator('/docs/module-4-vla/manipulation', 'b92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/multimodal',
                component: ComponentCreator('/docs/module-4-vla/multimodal', '662'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/voice-to-action',
                component: ComponentCreator('/docs/module-4-vla/voice-to-action', '7aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
