import axios from "axios";

// ****** Get IP Address
export const IpAddress = async ({ setLoading, setIpData }) => {
  try {
    let res = await axios.get(`http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IP_ADDRESS_API_KEY}`);
    if (res) {
      setLoading(false);
      setIpData(res.data.country_name);
    }
  } catch (error) {
    alert(`IP Address Error ${error}`);
  }
};


// ******* Get Country
export const GetCountry = async ({ setLoading, setCountries }) => {
  try {
    let res = await axios.get(`https://api.apilayer.com/number_verification/countries`, {
        headers : {
            apikey : process.env.REACT_APP_NUMBER_VALIDATE_API_KEY 
        }
    });
    if (res) {
      setLoading(false);
      setCountries(res.data);
    }
  } catch (error) {
    alert(`Country Error ${error}`);
    setLoading(false)
  }
};

// ******* Get SendEmails
export const SendEmail = async ({ firstName, lastName, phone, email, message, setSend}) => {
  try {
    const datas = {firstName, lastName, phone, email, message}
    let res = await axios.post(`http://localhost:5100/send`,
        datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(`Country Error ${error}`);
  }
};



