import Video from 'assets/videos/hero.gif';
import styles from './index.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.video_background}>
          <img src={Video} alt="Hero_background" className={styles.video} />
        </div>
        <div className={styles.content}>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
