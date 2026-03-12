import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

const TopBar = () => {
  return (
    <div className="nv-topbar">
      <div className="nv-container nv-topbar-inner">
        <span className="nv-topbar-contact-item">
          <EmailOutlinedIcon fontSize="inherit" className="nv-topbar-icon" />
          <span>contact@supernovatechs.com</span>
        </span>
        <span className="nv-topbar-contact-item">
          <PhoneInTalkOutlinedIcon fontSize="inherit" className="nv-topbar-icon" />
          <span>(+251) 963-711-1971</span>
        </span>
      </div>
    </div>
  );
};

export default TopBar;

