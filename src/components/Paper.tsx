import React, { useState } from "react";
import { InputField, RowRadioButtonsGroup } from "./materials/Material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface InputProps {
  organizationName: string;
  tagline: string;
  banner:any;
  organizationUrl: string;
  buttonColor: string;
  taglinePosition: string;
  organizationPosition: string;
  registerationPageForm: string;
  registrationPageLogo: string;
  registrationLogoPosition: string;
  registrationPageTagline: string;
  authentication: string;
}

const Paper = () => {
  const [user, setUser] = useState<InputProps>({
    organizationName: "",
    banner:File,
    tagline: "",
    organizationUrl: "",
    buttonColor: "",
    taglinePosition: "",
    organizationPosition: "",
    registerationPageForm: "",
    registrationPageLogo: "",
    registrationLogoPosition: "",
    registrationPageTagline: "",
    authentication: "",
  });

  const [banner, setBanner] = useState<File | null>(null);

  const [error, setErrors] = useState<any>({});
  const [errorValue, setErrorsValue] = useState<string>("");

  const notify = (message: string) => toast(message);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImage = (event:any)=>{

  
    setBanner(event.target.files[0])
    console.log(banner)

  }

  let errors:any  = {};

  const validate = (user: InputProps) => {

            const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
            const namedColorRegex = /^(red|blue|green|yellow|purple)$/i;
            const positionRegex = /^(top|center|right|bottom|left)$/i;
    
           
            
            if(user.organizationName === "") {
             errors.organizationName = "Field is required"
            }else if (user.organizationName.split(" ").length > 1){
                errors.organizationName = "should not include space";
                setErrorsValue("should not include space")
              
             
            }

            if(user.tagline === "") {
                errors.tagline = "Field is required"
               }else if (user.tagline.split(" ").length > 1){
                   errors.tagline = "should not include space";
                   setErrorsValue("should not include space")
                 
                
               }
    
            if(user.organizationUrl === "") {
                errors.organizationUrl = "Field is required"
               }else if(!urlRegex.test(user.organizationUrl)){
                errors.organizationUrl = "invalid format for url: Url must include http..."
                setErrorsValue("invalid format for url: Url must include http...")
                
            }
    
            if(user.buttonColor === "") {
                errors.buttonColor = "Field is required"
               }else if(!namedColorRegex.test(user.buttonColor)){
                errors.buttonColor = "red,green,blue,gray"
                setErrorsValue("red,green,blue,gray")
                
            }
    
            if(user.taglinePosition === "") {
                errors.taglinePosition = "Field is required"
            }else if(!positionRegex.test(user.taglinePosition)){
                errors.taglinePosition = "top,bottom,right,left or center"
                setErrorsValue("top,bottom,right,left or center")
            }
    
            if(user.organizationPosition === "") {
                errors.organizationPosition = "Field is required"
            }else if(!positionRegex.test(user.organizationPosition)){
                errors.organizationPosition = "top,bottom,right,left or center"
                setErrorsValue("top,bottom,right,left or center")
            }
            if(user.registerationPageForm === "") {
                errors.registerationPageForm = "Field is required"
            }else if(!positionRegex.test(user.registerationPageForm)){
                errors.registerationPageForm = "top,bottom,right,left or center"
                setErrorsValue("top,bottom,right,left or center")
            }
            if(user.registrationPageLogo === "") {
                errors.registrationPageLogo = "Field is required"
            }else if(!positionRegex.test(user.registrationPageLogo)){
                errors.registrationPageLogo = "top,bottom,right,left or center"
                setErrorsValue("top,bottom,right,left or center")
            }
            if(user.registrationLogoPosition === "") {
                errors.registrationLogoPosition = "Field is required"
            }else if(!positionRegex.test(user.registrationLogoPosition)){
                errors.registrationLogoPosition ="top,bottom,right,left or center"
                setErrorsValue("top,bottom,right,left or center")
            }
            if(user.registrationPageTagline === "") {
                errors.registrationPageTagline = "Field is required"
            }else if(!positionRegex.test(user.registrationPageTagline)){
                errors.registrationPageTagline = "top,bottom,right,left or center"
                setErrorsValue("top,bottom,right,left or center")
            }
    
            return errors;
        }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const errors = validate(user);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Your form submission logic using axios goes here
      try {
        // Simulating success for demonstration purposes
        // Replace with your actual form submission logic
        notify("Success");
        setUser({
          organizationName: "",
          tagline: "",
          banner:banner,
          organizationUrl: "",
          buttonColor: "",
          taglinePosition: "",
          organizationPosition: "",
          registerationPageForm: "",
          registrationPageLogo: "",
          registrationLogoPosition: "",
          registrationPageTagline: "",
          authentication: "",
        });
      } catch (error:any) {
        // Display an error toast notification
        notify("An error occurred: " + error.message);
      }
    } else {
      notify("Please fix the errors before submitting");
    }
  };

  return (
   
     <div>
        <form data-test="organization-form" onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "5px",
            flexWrap: "wrap",
            maxWidth: "98%",
        }}>
        <div>
            <InputField
                data-test="organization-name"
                type="text"
                label="Organization Name"
                placeholder="Organization Name"
                value={user.organizationName}
                onChange={handleChange}
                name="organizationName"
                required={true}
                disabled={false}
            />   
                {error.organizationName && (
                    <span style={{ color: 'red', fontSize: '12px', marginTop: '4px'}}>
                    {error.organizationName}
                    </span>
                )}
        </div>    
      
        <div>
            <InputField
                data-test="organization-url"
                type="text"
                label="Organization URL"
                placeholder="Organization URL"
                value={user.organizationUrl}
                onChange={handleChange}
                name="organizationUrl"
                required={true}
                disabled={false}
            />
                 {error.organizationUrl && (
                    <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                    {error.organizationUrl}
                    </span>
                )}
        </div>    
       
        <div>
            <InputField
                type="text"
                label="Button Color"
                placeholder="Button Color"
                value={user.buttonColor}
                onChange={handleChange}
                name="buttonColor"
                required={true}
                disabled={false}
            />

                {error.buttonColor && (
                        <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                        {error.buttonColor}
                        </span>
                )}
        </div>            
        
        <div>
        <InputField
            type="text"
            label="Tagline"
            placeholder="Tagline"
            value={user.tagline}
            onChange={handleChange}
            name="tagline"
             required={true}
             disabled={false}
        />

                {error.tagline && (
                        <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                        {error.tagline}
                        </span>
                )}
        </div>   
        
    
        <div>
            <InputField
                type="text"
                label="Tagline position"
                placeholder="Tagline"
                value={user.taglinePosition}
                onChange={handleChange}
                name="taglinePosition"
                required={true}
                disabled={false}
            />
                {error.taglinePosition && (
                            <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                            {error.taglinePosition}
                            </span>
                )}
        </div>

        <div>
            <InputField
                type="text"
                label="organization position"
                placeholder="centre"
                value={user.organizationPosition}
                onChange={handleChange}
                name="organizationPosition"
                required={true}
                disabled={false}
            />
            {error.organizationPosition && (
              <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                 {error.organizationPosition}
             </span>
            )}

        </div>

        <div>
            <InputField
                type="text"
                label="Reg Page Form"
                placeholder="left"
                value={user.registerationPageForm}
                onChange={handleChange}
                name="registerationPageForm"
                required={true}
                disabled={false}
            />
            {error.registerationPageForm && (
                <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                    {error.registerationPageForm}
                </span>
            )}
        </div>    
        <div>    
            <InputField
                type="text"
                label="Reg Logo Position"
                placeholder="right"
                value={user.registrationLogoPosition}
                onChange={handleChange}
                name="registrationLogoPosition"
                required={true}
                disabled={false}
            />
            {error.registrationLogoPosition && (
                <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                    {error.registrationLogoPosition}
                </span>
            )}
        </div>  
        
        <div>
            <InputField
                type="text"
                label="Reg Page Logo"
                placeholder="top"
                value={user.registrationPageLogo}
                onChange={handleChange}
                name="registrationPageLogo"
                required={true}
                disabled={false}
            />
                {error.registrationPageLogo && (
                        <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                            {error.registrationPageLogo}
                        </span>
                )}
        </div> 
        
        <div>
        <InputField
            type="text"
            label="Reg Page Tagline"
            placeholder="bottom"
            value={user.registrationPageTagline}
            onChange={handleChange}
            name="registrationPageTagline"
            required={true}
              disabled={false}
        />
          {error.registrationPageTagline && (
                        <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                            {error.registrationPageTagline}
                        </span>
         )}
        </div>
          
       <div style={{
        display:"flex",
        width:"100%",
        justifyContent:"space-between"
       }}>
      <label  htmlFor="bannerUpload" style={{ width:"43%",background:"grey",padding:"10px",margin:"5px", color: "white",}}>
        Upload Banner
      </label>
        <input type="file" id="bannerUpload" accept="image" onChange={handleImage} style={{display:"none"}}  name="banner" />
  
     
        <div>
            <InputField
                type="text"
                label="Tagline position"
                placeholder="Tagline"
                value={user.taglinePosition}
                onChange={handleChange}
                name="taglinePosition"
                required={true}
                disabled={false}
            />
                {error.taglinePosition && (
                            <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                            {error.taglinePosition}
                            </span>
                )}
        </div> </div>
       
        <div>
            <RowRadioButtonsGroup 
                label="authentication"
                value={user.authentication}
                onChange={handleChange}
                name="authentication"
            />  
        </div>

    

       <button data-test="organization-url" type="submit" style={{ width: "98%", backgroundColor: "blue", padding: "10px", color: "white", alignItems: "center", border: "none", margin: "5px" }}>Submit</button>
        <ToastContainer style={{color: "red"}}/>

        </form>
    </div>  
);
};

export default Paper;

