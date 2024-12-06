import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Conoce',
    Svg: require('@site/static/img/x.svg').default,
    description: (
      <>
        Conoce algunos patrones de diseño.
      </>
    ),
  },
  {
    title: 'Aprende',
    Svg: require('@site/static/img/x2.svg').default,
    description: (
      <>
        Aprende Que es, para que sirven, como aplicarlos, sus casos de uso,
        sus ventajas y desventajas, analogias en la vida real y como aplicarlo de forma adecuada.
      </>
    ),
  },
  {
    title: 'Documentacion Entendible',
    Svg: require('@site/static/img/x3.svg').default,
    description: (
      <>
       Con esta Documentación acerca de algunos patrones de diseño entenderas lo necesario.
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
        <Heading as="h3">{title}</Heading>
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
