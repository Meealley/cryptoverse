import React, { useEffect, useState } from "react";
import contactLogo from "../../../assets/Rocket Launchpad 2BBB.png";
import {
  validateEmail,
  validateFirstName,
  validateLastName,
  validateMessage,
  validatePhone,
} from "./Validation";
import InlineError from "./InlineError";
import { GetCountry, IpAddress, SendEmail } from "../../../API/Api";
import Loader from "../../Loader";
import { toast } from "react-toastify";
import Toast from "./Toaster";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState();

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState();
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState();
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState();
  const [loading, setLoading] = useState(true);
  const [ipData, setIpData] = useState();
  const [countries, setCountries] = useState();
  const [country, setCountry] = useState("Nigeria");
  const [buttonLaoding, setButtonLaoding] = useState(false);
  const [send, setSend] = useState();

  let result = countries && Object.keys(countries).map((key) => countries[key]);
  let output = result && result.find((x) => x.country_name === country);
  let outputResult = output && output.dialling_code;
  let phoneFull = outputResult && outputResult.concat(phone);

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const messageHandler = (event) => {
    setMessage(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };
  const countryHandler = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    if (!ipData & !countries) {
      IpAddress({ setLoading, setIpData });
      GetCountry({ setLoading, setCountries });
    }

    validateFirstName({ firstName, setFirstNameError });
    validateLastName({ lastName, setLastNameError });
    validateEmail({ email, setEmailError });
    validateMessage({ message, setMessageError });
    validatePhone({ phone, setPhoneError });

    //******* */
    if (send) {
      toast.success(send.message);
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setMessage("")
      setSend()

    }
  }, [firstName, lastName, email, message, phone, send, ipData, countries]);

  const sumbitFormHandler = (event) => {
    event.preventDefault();
    setButtonLaoding(true);
    if (
      !firstNameError &
      !lastNameError &
      !emailError &
      !phoneError &
      !messageError
    ) {
      SendEmail({
        firstName,
        lastName,
        phone: phoneFull,
        email,
        message,
        setSend,
      }).then(() => {
        setButtonLaoding(false);
      });
    }
  };

  return (
    <>
      <Toast />
      <section className="h-screen bg-white">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="mt-12 lg:my-8">
              <h1 className="text-center font-abc font-bold capitalize text-[38px] bg-clip-text text-transparent bg-gradient-to-br from-[#5c2234] to-orange-600">
                contact us
              </h1>
            </div>
            <div className="max-w-[40rem] mx-auto mb-20 bg-black rounded-[20px] shadow-md">
              <div className="flex justify-center">
                <img
                  src={contactLogo}
                  alt="contactlogo"
                  className="w-[100px] h-[100px]"
                />
              </div>
              <div>
                <p className="text-white p-4 font-abc text-center">
                  Leave your details below and we'll contact you to discuss
                  purchasing $RKT
                </p>
              </div>
              <div>
                <form className=" text-white px-4" onSubmit={sumbitFormHandler}>
                  <div className="flex flex-col py-2">
                    <label htmlFor="firstname" className="font-abc">
                      First Name*
                    </label>
                    <input
                      type="text"
                      className="rounded-md py-2 text-black px-2 outline-none"
                      required
                      placeholder=""
                      value={firstName}
                      onChange={firstNameHandler}
                    />
                    {firstNameError && <InlineError error={firstNameError} />}
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="firstname" className="font-abc">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="rounded-lg py-2 outline-none px-2 text-black"
                      required
                      placeholder=""
                      value={lastName}
                      onChange={lastNameHandler}
                    />
                    {lastNameError && <InlineError error={lastNameError} />}
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="firstname" className="font-abc">
                      Email
                    </label>
                    <input
                      type="email"
                      className="rounded-lg py-2 outline-none text-black px-2"
                      required
                      placeholder=""
                      value={email}
                      onChange={emailHandler}
                    />
                    {emailError && <InlineError error={emailError} />}
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="phone" className="font-abc">
                      Phone
                    </label>
                    <div className="grid gap-3 grid-cols-12 rounded-full w-full px-2">
                      <select
                        value={country}
                        onChange={countryHandler}
                        className="col-span-3 py-2 text-md rounded-lg text-black "
                        id=""
                      >
                        {result &&
                          result.map((event, index) => (
                            <option key={index} value={event.country_name}>
                              {event.country_name}
                            </option>
                          ))}
                      </select>
                      <div className="col-span-2 tracking-widest flex-col">
                        {outputResult}
                      </div>
                      <input
                        type="number"
                        required
                        className="rounded-lg py-2 outline-none col-span-7 text-black px-2"
                        value={phone}
                        onChange={phoneHandler}
                      />
                    </div>
                    {phoneError && (
                      <InlineError
                        className="flex justify-center"
                        error={phoneError}
                      />
                    )}
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="text" className="font-abc">
                      Message
                    </label>
                    <textarea
                      rows="3"
                      className="mt-2 w-full rounded-lg text-black p-2 outline-none"
                      value={message}
                      onChange={messageHandler}
                    ></textarea>
                    {messageError && <InlineError error={messageError} />}
                  </div>
                  <div className="my-8 pb-8">
                   
                      <button
                      disabled={buttonLaoding && true}
                        className="font-abc rounded-full bg-gradient-to-br from-[#5c2234] to-orange-600 px-6 py-2"
                        type="submit"
                      >
                        {buttonLaoding ? "Loading..." : "Submit"}
                      </button>
                
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ContactUs;
