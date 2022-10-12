import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tooling',
    Svg: require('@site/static/img/undraw_hacker_mind_-6-y85.svg').default,
    description: (
      <>
        Dirt Road Dev offers developers in the Web3 ecosystem the ability to quickly get up and running with a variety of tools desgined for rapid iteration and growth in the Web3 space. Amazing projects and platforms are being innovated and created everyday. Avoid  wasting time with tons of boilerplat and  use the Dirt Road Dev suite of tools. 
      </>    
    ),
  },
  {
    title: 'Services',
    Svg: require('@site/static/img/undraw_team_collaboration_re_ow29.svg').default,
    description: (
      <>
        The ability to create a project, an application, a dApp, or any type of company is difficult. Even more so in the Web3 space where innovation moves faster and faster. Dirt Road Dev offers a core suite of services available to help you avoid the hassle and get to market. Core services including consulting, software development and graphic design.
      </>
    ),
  },
  {
    title: 'Support',
    Svg: require('@site/static/img/undraw_educator_re_ju47.svg').default,
    description: (
      <>
        In a competetive, yet collaborative space; finding support is not always easy. Dirt Road Dev offers development support and general troubleshooting help for the Web3 space through Discord. Ask questions and recieve help, Dirt Road Development can help you avoid the roadblocks and launch your product. Stop waiting, join the Discord for free today. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
