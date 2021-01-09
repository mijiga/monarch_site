import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


function ValuePropTitle({ name, description, imageUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("row", styles.valuePropTitle)}>
      <div className={clsx('col col--5')}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className={clsx('col col--7')}>
        {imgUrl && (
          <div className="text--center">
            <img src={imgUrl} alt={name} />
          </div>
        )}
      </div>
    </div>
  );
}

function ValuePropItem({ name, description, imageUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("row", styles.valuePropItem)}>
      <div className={clsx('col col--4')} style={{ flex: '0 0 calc(4/12 *100%)', maxWidth: '0 0 calc(4/12 *100%)' }}>
        {imgUrl && (
          <div className="text--center">
            <img src={imgUrl} alt={name} />
          </div>
        )}
      </div>
      <div className={clsx('col col--8')} style={{ flex: '0 0 calc(8/12 *100%)', maxWidth: '0 0 calc(8/12 *100%)', paddingLeft: 0 }}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Monarch | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/install/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.valuePropSection}>
          <div className="container">
            <ValuePropTitle
              name="Develop high-quality UIs"
              description="Monarch provides a sandbox to build Flutter widgets in isolation (inspired by Storybook JS)."
              imageUrl="img/480x320.png" />
            <ValuePropItem
              name="Build widgets in isolation"
              description="Create widgets without worrying about data, screens, emulators, backends or business logic."
              imageUrl="img/220x220.png" />
            <ValuePropItem
              name="Mock hard to reach use cases"
              description="Render widgets in visual states that are difficult to reproduce."
              imageUrl="img/220x220.png" />
            <ValuePropItem
              name="Compose your widgets into complex screens"
              description="Monarch can render screens or pages just like any other widget."
              imageUrl="img/220x220.png" />
          </div>
        </section>
        <section className={clsx(styles.valuePropSection, styles.valuePropSectionAlt)}>
          <div className="container">
            <ValuePropTitle
              name="Test with ease"
              description="Monarch makes it very easy to test complex UIs."
              imageUrl="img/480x320.png" />
            <ValuePropItem
              name="Verify your UX is right"
              description="A story is a visual spec. Browse your stories to make sure your UI and animations are consistent and look right."
              imageUrl="img/220x220.png" />
            <ValuePropItem
              name="Unit test widgets"
              description="Reuse stories in your widget tests."
              imageUrl="img/220x220.png" />
            <ValuePropItem
              name="Test fast"
              description="Monarch renders your changes much faster than an emulator."
              imageUrl="img/220x220.png" />
            <ValuePropItem
              name="Detect issues in common scenarios"
              description="Quickly see your widgets under different scaled text sizes, localizations, and device configurations."
              imageUrl="img/220x220.png" />
          </div>
        </section>
        <section className={styles.valuePropSection}>
          <div className="container">
            <ValuePropTitle
              name="Get a component library"
              description="As you create stories, you are also creating a component library."
              imageUrl="img/480x320.png" />
            <ValuePropItem
              name="Share components across screens"
              description="Easily find widgets to reuse in other screens."
              imageUrl="img/220x220.png" />
            <ValuePropItem
              name="Organize your component library"
              description="As you write stories you get a referenceable design library for all of your coded components."
              imageUrl="img/220x220.png" />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
