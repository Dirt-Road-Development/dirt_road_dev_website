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
        Dirt Road Dev offers developers in the Web3 ecosystem the ability to quickly get up and running with a variety of tools desgined for rapid iteration and growth in the Web3 space. 
      </>    
    ),
  },
  {
    title: 'Services',
    Svg: require('@site/static/img/undraw_team_collaboration_re_ow29.svg').default,
    description: (
      <>
       Whether you need a Proof-of-Concept (PoC) built, a logo designed, or Web3 education for your engineers; Dirt Road Development offers all the core services a Web3 startup needs. 
      </>
    ),
  },
  {
    title: 'Education',
    Svg: require('@site/static/img/undraw_educator_re_ju47.svg').default,
    description: (
      <>
      The blockchain/Web3 space changes fast. Additionally, the amount of education available for this field is limited to the basic. DRD is looking to provide start to finish education in the space.
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
