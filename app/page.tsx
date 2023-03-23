import Image from 'next/image';
import { Inter } from 'next/font/google';

import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            src='/lemur-image-1500.jpg'
            alt='Next.js Logo'
            width={1500}
            height={1254}
            priority
          />
        </div>

        <div>
          <h1 className={styles.name}>lemursman</h1>
        </div>

        <div>
          <h2>Open source outfit.</h2>
        </div>

        <div className={styles.spacer}>&nbsp;</div>

        <div className={styles.grid}>
          <a
            href='https://github.com/lemursman'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Contribute.</p>
          </a>

          <a
            href='mailto:hello@lemursman.com'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Contact <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Send us an email.</p>
          </a>

          <a
            href='mailto:hire@lemursman.com'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Hire us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>We&apos;ll build it for you.</p>
          </a>
        </div>
      </main>

      <div className={styles.copyright}>
        <div className={inter.className}>&copy; 2023 lemursman, LLC.</div>
      </div>
    </>
  );
}
