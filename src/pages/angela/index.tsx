import { QRCodeSVG } from 'qrcode.react'
import Image from 'next/image'
import styles from './../Home.module.scss'
export default function Home() {
  return (
    <div className={styles.bizCardBody}>
      <div className={styles.bizCard}>
        <div className={styles.bizCardTop}>
          <div className={styles.bizCardTopLeft}>
            <h1>
              Angela Unida
            </h1>
            <p>
              Sr Technica Project Manager
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
                  +63 927 776 1819
                </p>
              </li>
              <li>
                <div>
                  <Image src='/svgs/email.svg' alt='Email' priority width={20} height={20} unoptimized={true} />
                </div>
                <p>
                  <span>Email Address</span>
                  rflorante@gmail.com
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.bizCardDetailsRight}>
            <QRCodeSVG value="https://reactjs.org/" width={80} />
          </div>
        </div>
      </div>
    </div>
  );
}