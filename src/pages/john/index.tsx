import { QRCodeSVG } from 'qrcode.react'
import Image from 'next/image'
import styles from './../Home.module.scss'
export default function Home() {
  return (
    <div className={styles.bizCard}>
      <div className={styles.bizCardTop}>
        <div className={styles.bizCardTopLeft}>
          <h1>
            John Patrick Vasquez
          </h1>
          <p>
            Application Lead Developer
          </p>
        </div>
        <div className={styles.bizCardTopRight}>
          <Image src='/logo.png' alt='CRAF Logo' priority width={20} height={20} unoptimized={true} />
        </div>
      </div>
      <div className={styles.bizCardDetails}>
        <div className={styles.bizCardDetailsLeft}>
          <ul>
            <li>
              <div>
                <Image src='/svgs/location.svg' alt='Location' priority width={20} height={20} unoptimized={true} />
              </div>
              <p>
                <span>Location</span>
                7 Metroville 2, Tandang Sora Ave, Project 8, Quezon City, Metro Manila, Philippines, 1116
              </p>
            </li>
            <li>
              <div>
                <Image src='/svgs/phone.svg' alt='Phone' priority width={20} height={20} unoptimized={true} />
              </div>
              <p>
                <span>Mobile Number</span>
                +63 926 656 9064
              </p>
            </li>
            <li>
              <div>
                <Image src='/svgs/email.svg' alt='Email' priority width={20} height={20} unoptimized={true} />
              </div>
              <p>
                <span>Email Address</span>
                vasquezjp14@gmail.com
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.bizCardDetailsRight}>
          <QRCodeSVG value="https://reactjs.org/" width={100} />
        </div>
      </div>
    </div>
  );
}