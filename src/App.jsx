import tick from './assets/tickIcon.png';
import { Country } from 'country-state-city';

const countries = Country.getAllCountries();

const App = () => {
  const handleFirst = e => {
    e.preventDefault();

    const form = e.target;
    const intro = form.intro.value;
    const name = form.name.value;
    const country = form.country.value;
    const phoneCode = form.phoneCode.value;
    const phoneNext = form.phone.value;

    if (phoneCode[0] === '+') {
      var phone = phoneCode + phoneNext;
    } else {
      phone = '+' + phoneCode + phoneNext;
    }

    const email = form.email.value;
    const data = { intro, name, country, phoneCode, phoneNext, phone, email };
    console.log(data);
  };

  return (
    <div className="bg-[#122B49] px-28 py-14 min-h-screen">
      <h3 className="text-white text-start text-[32px] font-normal">
        Sell or Rent your Property For Free
      </h3>
      <h5 className="text-white text-start text-base font-light mt-4">
        Whether you’re ready to sell or looking for answers, we’ll guide you
        with data and expertise specific to your <br /> needs.
      </h5>
      <div className="mt-9 grid grid-cols-5 gap-24">
        {/* left side */}
        <div className="col-span-2">
          <h5 className="text-white text-xl font-normal my-6">
            Upload your property in 4 simple steps
          </h5>
          <div className="flex items-center mb-2 ml-12">
            <img src={tick} alt="ticksign" />
            <h4 className="text-white text-sm font-normal">
              Add your properties{' '}
              <span className="font-extrabold">Basic Details</span>
            </h4>
          </div>
          <div className="flex items-center mb-2 ml-12">
            <img src={tick} alt="ticksign" />
            <h4 className="text-white text-sm font-normal">
              Add property <span className="font-extrabold">Location</span>
            </h4>
          </div>
          <div className="flex items-center mb-2 ml-12">
            <img src={tick} alt="ticksign" />
            <h4 className="text-white text-sm font-normal">
              Add property{' '}
              <span className="font-extrabold">Features and amenities</span>
            </h4>
          </div>
          <div className="flex items-center mb-2 ml-12">
            <img src={tick} alt="ticksign" />
            <h4 className="text-white text-sm font-normal">
              Add <span className="font-extrabold">Price details</span>
            </h4>
          </div>
          <div className="flex items-center mb-2 ml-12">
            <img src={tick} alt="ticksign" />
            <h4 className="text-white text-sm font-normal">
              Add your best{' '}
              <span className="font-extrabold">Property Shots</span>
            </h4>
          </div>
        </div>
        {/* right side */}
        <div className="col-span-3 bg-white rounded-2xl text-start">
          <form onSubmit={handleFirst}>
            {/* inner top */}
            <h3 className="text-[#122B49] text-xl font-normal text-left bg-[#FCF8F4] px-[68px] py-[25.5px] rounded-t-2xl">
              LETS GET YOU STARTED !
            </h3>
            <div className="px-[68px] py-10 max-h-[270px] overflow-y-auto">
              {/* I am */}
              <h5 className="font-inter text-lg font-medium font-inter text-left mb-4">
                <span className="text-[#FF4D4F] text-sm font-normal">*</span> I
                am :
              </h5>
              <div className="text-left px-2 flex items-center gap-6">
                <input
                  type="radio"
                  name="intro"
                  value="Owner"
                  className="h-7 w-7"
                />
                <h5 className="font-inter text-lg font-normal w-1/3">Owner</h5>

                <input
                  type="radio"
                  name="intro"
                  value="Builder"
                  className="h-7 w-7"
                />
                <h5 className="font-inter text-lg font-normal">Builder</h5>
              </div>
              {/* Name */}
              <h5 className="font-inter text-lg font-medium font-inter text-left mb-4 mt-[60px]">
                Your Name{' '}
                <span className="text-[#FF4D4F] text-sm font-normal">*</span>
              </h5>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-2 border-[#7A7A7A] w-2/3 px-3 py-[5px] rounded-sm focus:outline-green-500"
              />
              {/* Country */}
              <h5 className="font-inter text-lg font-medium font-inter text-left mb-4 mt-[60px]">
                Country{' '}
                <span className="text-[#FF4D4F] text-sm font-normal">*</span>
              </h5>
              <select
                type="text"
                name="country"
                className="border-2 border-[#7A7A7A] w-2/3 px-3 py-[5px] rounded-sm text-gray-600"
                required
              >
                <option hidden value="">
                  Select a country
                </option>
                {countries.map(({ name }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>

              {/* Phone */}
              <h5 className="font-inter text-lg font-medium font-inter text-left mb-4 mt-[60px]">
                Phone{' '}
                <span className="text-[#FF4D4F] text-sm font-normal">*</span>
              </h5>
              <div className="flex gap-2">
                <select
                  name="phoneCode"
                  className="border-2 border-[#7A7A7A] px-3 py-[5px] rounded-sm text-gray-600 w-24 text-sm"
                  type="text"
                  required
                >
                  {countries.map(({ phonecode }, index) => (
                    <option key={index} value={phonecode}>
                      {phonecode[0] === '+' ? '' : '+'}
                      {phonecode}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="phone"
                  placeholder="000-000-0000"
                  className="border-2 border-[#7A7A7A] w-1/2 px-3 py-[5px] rounded-sm focus:outline-green-500"
                />
              </div>
              {/* Email */}
              <h5 className="font-inter text-lg font-medium font-inter text-left mb-4 my-4">
                OR{' '}
              </h5>
              <h5 className="font-inter text-lg font-medium font-inter text-left mb-4">
                Email{' '}
                <span className="text-[#FF4D4F] text-sm font-normal">*</span>
              </h5>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="border-2 border-[#7A7A7A] w-2/3 px-3 py-[5px] rounded-sm focus:outline-green-500"
              />
            </div>
            {/* inner bottom */}
            <div className="text-[#122B49] text-xl font-normal text-left bg-[#FCF8F4] px-[68px] py-[25.5px] rounded-b-2xl font-inter flex justify-between">
              <h5 className="text-[#7A7A7A] text-xs font-normal">
                Need Help?{' '}
                <span className="text-black font-medium">Call 9999999999</span>
              </h5>
              <input
                type="submit"
                value="Next"
                className="px-8 py-3 bg-[#122B49] rounded-xl text-white text-base font-normal font-inter"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
