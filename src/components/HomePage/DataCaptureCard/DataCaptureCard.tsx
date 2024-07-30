import Link from '@docusaurus/Link';
import Arrow from '../../IconComponents/Arrow';
import style from './DataCaptureCard.module.css';

export default function DataCaptureCard({children, link}) {
    return(
        <Link to={link} className={style.dataCaptureCard}>
            <p className={style.text}>{children}</p><Arrow iconClass={style.dataCaptureCardIcon}/>
        </Link>
    )
}