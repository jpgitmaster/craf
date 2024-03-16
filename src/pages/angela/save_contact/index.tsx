import Image from 'next/image'
var vCardsJS = require('vcards-js')
import styles from './../../Home.module.scss'
export default function Home() {
    const CreateVCard = () => {
        var vCard = vCardsJS();
        vCard.firstName = 'Angela';
        vCard.lastName = 'Unida';
        vCard.organization = 'CRAF Enterprise';
        vCard.workEmail = 'angelaunida@gmail.com';
        vCard.workPhone = '+63-927-776-1819';
        vCard.title = 'Sr Technical Project Manager';

        vCard.workAddress.label = 'Work Address';
        vCard.workAddress.street = '7 Metroville 2, Tandang Sora Ave, Project 8';
        vCard.workAddress.city = 'Quezon City';
        vCard.workAddress.stateProvince = 'Metro Manila';
        vCard.workAddress.postalCode = '1116';
        vCard.workAddress.countryRegion = 'NCR';
        return vCard.getFormattedString();
    }
    const saveVcard = (vcfText: any) => {
        const element = document.createElement("a");
        const file = new Blob([vcfText], { type: "text/plain;charset=utf-8" });
        element.href = URL.createObjectURL(file);
        element.download = "angela_unida.vcf";
        document.body.appendChild(element);
        element.click();
    }
  return (
    <div className={styles.bizCardBody}>
        <div className={styles.bizCard+' '+styles.landingPage}>
            <div className={styles.bizCardTop}>
                <Image src='/logo.png' alt='CRAF Logo' priority width={20} height={20} unoptimized={true} />
            </div>
            <div className={styles.bizCardBottom}>
                <div className={styles.bizCardDetails}>
                    <div className={styles.bizCardDetailsLeft}>
                        <ul>
                            <li className={styles.user}>
                                <h1>
                                Angela Unida
                                </h1>
                                <p>
                                    Sr Technical Project Manager
                                </p>
                            </li>
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
                                angelaunida@gmail.com
                            </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button type='button' onClick={() => saveVcard(CreateVCard())}>
                        Save Contact
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}