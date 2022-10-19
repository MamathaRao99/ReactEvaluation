import CopyPass from '../copyPassword/copyPass';
import './siteBoxs.css'

const SiteBox = (props:any) => {
    return (
      <div className="siteBox">
        <div className="header">
          <img
            src={`/appIcons/${props.appIcon}Icon.png`}
            alt="webSiteIcon"
            className="appIcon"
          />
          <div className="webSiteDetails">
            <p className="webSiteName">{props.appIcon}</p>
            <CopyPass/>
          </div>
        </div>
        <div className="siteLink">www.{props.appIcon}.com</div>
      </div>
    );
}

export default SiteBox