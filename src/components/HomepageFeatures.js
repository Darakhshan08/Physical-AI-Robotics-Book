import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Explore Physical AI',
    Svg: require('../../static/img/explore-ai-icon.svg').default,
    description: (
      <>
        Dive deep into the world of Physical AI, where intelligent agents interact with the real world. Learn the core concepts that bridge the gap between digital and physical intelligence.
      </>
    ),
  },
  {
    title: 'Build Humanoid Robots',
    Svg: require('../../static/img/build-robot-icon.svg').default,
    description: (
      <>
        Get hands-on experience with humanoid robotics. From simulation to real-world deployment, this book will guide you through the process of building and programming your own humanoid robot.
      </>
    ),
  },
  {
    title: 'Practical Learning',
    Svg: require('../../static/img/practical-learning-icon.svg').default,
    description: (
      <>
        Learn by doing. This book is packed with practical examples, code snippets, and hands-on projects that will help you master the skills needed to build the next generation of intelligent robots.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}