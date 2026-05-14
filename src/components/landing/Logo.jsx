import { LOGO_SRC } from './landingData.jsx';

export default function Logo() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src={LOGO_SRC} alt="" />
    </span>
  );
}
