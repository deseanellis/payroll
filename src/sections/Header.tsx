import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div id="header">
      <img src={Logo} alt="Logo" />
      <div className="title">Double Check Meh Payslip</div>
    </div>
  );
}
