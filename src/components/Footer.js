import React from 'react';


const Footer=() => {

      const year=new Date().getFullYear();
    
      return (
                 <>
               <footer  className="foot" >
                    <p>© {year} RazaKhan. All Rights Reserved ! Terms and Conditions</p>
               </footer>
                 </>
                );
            }
export default Footer;