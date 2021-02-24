// Library import statement
import { useContext } from 'react';

// Cost context import for getting const context data
import CostContext from '../../context/costContext/costContext';

// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';

// Main component function
const LoginSystem = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const handleInputChange = (event) => {
    addFeature({id: event.target.id, featureName: event.target.name, featurePrice: event.target.value});
  }

  return (
    <CardLayout sectionTitle = 'Login System'>
      <CheckBox
        id='email_pass_login'
        name={featureData.emailPasswordLogin.name}
        value={featureData.emailPasswordLogin.price}
        handleInputChange = {handleInputChange}
        featureData = {featureData}
      />

      <CheckBox
        id='social_login'
        name={featureData.socialLogin.name}
        value={featureData.socialLogin.price}
        handleInputChange = {handleInputChange}
      />
    </CardLayout>
  )
}

export default LoginSystem;
