import { Outlet, useLocation, Link } from 'react-router-dom';
import { Stepper, Step, StepLabel } from '@mui/material';
import { useEffect, useState } from 'react';

const steps = [
  ['Logged In', '/login'],
  ['Shipping', '/shipping'],
  ['Payment Method', '/payment'],
  ['Place Order', '/place-order'],
];

function StepperLayout() {
  const pathname = useLocation().pathname;
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    switch (pathname) {
      case '/shipping':
        setActiveStep(1);
        break;
      case '/payment':
        setActiveStep(2);
        break;
      case '/place-order':
        setActiveStep(3);
        break;

      default:
        break;
    }
  }, [pathname]);
  console.log(pathname);
  return (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        padding: '5rem 13rem',
      }}
    >
      <div>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => (
            <Step key={step[0]}>
              <Link to={step[1]}>
                <StepLabel>{step[0]}</StepLabel>
              </Link>
            </Step>
          ))}
        </Stepper>
      </div>
      <div
        style={{
          padding: '4rem',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default StepperLayout;
