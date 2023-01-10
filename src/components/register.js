import React, { useState } from "react";

// import React from "react";

const Register = () => {
    const [isActive, setIsActive] = useState(true);
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
        setIsActive(current => !current);
    }

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [gender, setGender] = useState("");
    const [registrationnumber, setRegistrationnumber] = useState("");
    const [nationality, setNationality] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [permanentaddress, setPermanentaddress] = useState("");
    const [fathersname, setFathersname] = useState("");
    const [fathersnumber, setFathersnumber] = useState("");
    const [mothersname, setMothersname] = useState("");
    const [mothersnumber, setMothersnumber] = useState("");
    const [guardianname, setGuardianname] = useState("");
    const [guardiannumber, setGuardiannumber] = useState("");
    // const [course, setCourse] = useState("");
    // beginning of olevel marks
    const [biology, setBiology] = useState("");
    const [chemistry, setChemistry] = useState("");
    const [mathematics, setMathematics] = useState("");
    const [physics, setPhysics] = useState("");
    const [agriculture, setAgriculture] = useState("");
    const [fn, setFn] = useState("");
    const [history, setHistory] = useState("");
    const [cre, setCre] = useState("");
    const [ire, setIre] = useState("");
    const [fineart, setFineart] = useState("");
    const [geography, setGeography] = useState("");
    const [literature, setLiterature] = useState("");
    const [economics, setEconomics] = useState("");
    const [rukiga, setRukiga] = useState("");
    const [luganda, setLuganda] = useState("");
    const [entpreneurship, setEntpreneurship] = useState("");
    const [english, setEnglish] = useState("");
    const [computer, setComputer] = useState("");
    const [technicaldrawing, setTechnicaldrawing] = useState("");
    const [french, setFrench] = useState("");
    const [accounting, setAccounting] = useState("");
    const [kiswahili, setKiswahili] = useState("");
    const [commerce, setCommerce] = useState("");
    const [chinesse, setChinesse] = useState(""); 
    // alevel marks
    const [bio, setBio] = useState("");
    const [chem, setChem ] = useState("");
    const [mtc, setMtc] = useState("");
    const [phy, setPhy] = useState("");
    const [agric, setAgric] = useState("");
    const [foodnutrition, setFoodnutrition] = useState("");
    const [hist, setHist] = useState("");
    const [divinity, setDivinity] = useState("");
    const [islam, setIslam] = ("");
    const [art, setArt] = useState("");
    const [geog, setGeog] = useState("");
    const [lit, setLit] = useState("");
    const [econ, setEcon] = useState("");
    const [ruk, setRuk] = useState("");
    const [lug, setLug] = useState("");
    const [ent, setEnt] = useState("");
    const [ict, setIct] = useState("");
    const [submaths, setSubmaths] = useState("");
    const [gp, setGp] = useState("");  
    // other qualifications
    const [certificate, setCertificate] = useState("");
    const [diploma, setDiploma] = useState("");
    const [bachelors, setBachelors] = useState("");

    let handleSubmit = async (e) => {
        
        e.preventDefault();
        try {
          await fetch("http://44.202.98.199:9001/add_students", {
            
            method: "POST",
            body: JSON.stringify({
              firstname: firstname,
              lastname: lastname,
              dateofbirth: dateofbirth,
              gender: gender,
              registrationnumber: registrationnumber,
              nationality: nationality,
              telephone: telephone,
              email: email,
              permanentaddress: permanentaddress,
              fathersname: fathersname,
              fathersnumber: fathersnumber,
              mothersname: mothersname,
              mothersnumber: mothersnumber,
              guardianname: guardianname,
              guardiannumber: guardiannumber,
            //   olevel marks
              biology: biology,
              chemistry: chemistry,
              mathematics: mathematics,
              physics: physics,
              agriculture: agriculture,
              fn: fn,
              history: history,
              cre: cre,
              ire: ire,
              fineart: fineart,
              geography: geography,
              literature: literature,
              economics: economics,
              rukiga: rukiga,
              luganda: luganda,
              entpreneurship: entpreneurship,
              english: english,
              computer: computer,
              technicaldrawing: technicaldrawing,
              french: french,
              accounting: accounting,
              kiswahili: kiswahili,
              commerce: commerce,
              chinesse: chinesse,
            // ALEVEL MATRKS
              bio: bio,
              chem: chem,
              mtc: mtc,
              phy: phy,
              agric: agric,
              foodnutrition: foodnutrition,
              hist: hist,
              divinity: divinity,
              islam: islam,
              art: art,
              geog: geog,
              lit: lit,
              econ: econ,
              ruk: ruk,
              lug: lug,
              ent: ent,
              ict: ict,
              submaths: submaths,
              gp: gp,
            //   other qualifications
              certificate: certificate,
              diploma: diploma,
              bachelors: bachelors

            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(results => results.json())
          .then((response) => {
            console.log(response)
          })
        } catch (err) {
          console.log(err);
        }
      };
    return(
        <div>
            <div class="main">
		<h1> KCU 2022AP $ 2022AG REG FORM</h1>
		<div class="content">
			
			<script src="js/easyResponsiveTabs.js" type="text/javascript"></script>
					{/* <script type="text/javascript">
						$(document).ready(function () {
							$('#horizontalTab').easyResponsiveTabs({
								type: 'default', //Types: default, vertical, accordion           
								width: 'auto', //auto or any width like 600px
								fit: true   // 100% fit in a container
							});
						});
						
					</script> */}
						<div class="sap_tabs">
                        <div id="horizontalTab"  style={{ display: "block", width: "100%", margin: "0px" }}>
								<div class="pay-tabs">
									<h2>Select Input field</h2>
									  <ul class="resp-tabs-list">
										  {/* <li class="resp-tab-item" aria-controls="tab_item-0" role="tab"><span><label class="pic1"></label>Credit Card</span></li> */}
                                          <li class={toggleState === 0 ? "resp-tab-item" : "resp-tab-item"} aria-controls="tab_item-0" style={{ color: isActive ? '' : '#B3E03F', }} role="tab" onClick={() => toggleTab(0)}><span><label class="pic1"></label>BIO-DATA</span></li>
                                          {/* <li className={toggleState === 2 ? "resp-tab-item" : "resp-tab-item"} aria-controls="tab_item-2" style={{ width: "40%", color: isActive ? '' : '#B3E03F', }} role="tab" onClick={() => toggleTab(2)}><span> <i className="fa fa-qrcode" style={{ fontSize: "48px" }}></i><br />CLIC Pay</span></li> */}
										  {/* <li class="resp-tab-item" aria-controls="tab_item-1" role="tab"><span><label class="pic3"></label>Net Banking</span></li> */}
                                          <li className={toggleState === 1 ? "resp-tab-item" : "resp-tab-item"} aria-controls="tab_item-1" style={{ color: isActive ? '' : '#B3E03F', }} role="tab" onClick={() => toggleTab(1)}><span><label class="pic3"></label>O LEVEL MARKS</span></li>
										  {/* <li class="resp-tab-item" aria-controls="tab_item-2" role="tab"><span><label class="pic4"></label>PayPal</span></li> */}
                                          <li className={toggleState === 2 ? "resp-tab-item" : "resp-tab-item"} aria-controls="tab_item-2" style={{ color: isActive ? '' : '#B3E03F', }} role="tab" onClick={() => toggleTab(2)}><span><label class="pic4"></label>A LEVEL MARKS</span></li>
										  {/* <li class="resp-tab-item" aria-controls="tab_item-3" role="tab"><span><label class="pic2"></label>Debit Card</span></li> */}
                                          <li className={toggleState === 1 ? "resp-tab-item" : "resp-tab-item"} aria-controls="tab_item-3" style={{ color: isActive ? '' : '#B3E03F', }} role="tab" onClick={() => toggleTab(3)}><span><label class="pic3"></label>OTHER QUALIFICATIONS</span></li>
										  <div class="clear"></div>
									  </ul>	
								</div>
								<div class="resp-tabs-container">
                                    <div className={toggleState === 0 ? "tab_item-0" : "tab-1 resp-tab-content"} aria-labelledby="tab_item-0">
									{/* <div aria-labelledby="tab_item-0"> */}
										<div class="payment-info">
											<h3>Personal Information</h3>
											
											<form onSubmit={handleSubmit}>
												<div class="tab-for">				
													<h5>first name</h5>
														<input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
													<h5>last name</h5>													
														<input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
													<h5>date of birth</h5>													
														<input type="text" value={dateofbirth} onChange={(e) => setDateofbirth(e.target.value)} />
                                                    <h5>gender</h5>													
														<input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                                                    <h5>registration number</h5>													
														<input type="text" value={registrationnumber} onChange={(e) => setRegistrationnumber(e.target.value)} />
                                                    <h5>nationality</h5>													
														<input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
                                                    <h5>telephone</h5>													
														<input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                                                    <h5>email</h5>													
														<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                    <h5>permanent address</h5>													
														<input type="text" value={permanentaddress} onChange={(e) => setPermanentaddress(e.target.value)} />
                                                    <h5>fathers name</h5>													
														<input type="text" value={fathersname} onChange={(e) => setFathersname(e.target.value)} />
                                                    <h5>fathers tel no</h5>													
														<input type="text" value={fathersnumber} onChange={(e) => setFathersnumber(e.target.value)} />
                                                    <h5>mothers name</h5>													
														<input type="text" value={mothersname} onChange={(e) => setMothersname(e.target.value)} />
                                                    <h5>mothers number</h5>													
														<input type="text" value={mothersnumber} onChange={(e) => setMothersnumber(e.target.value)} />
                                                    <h5>guardian name</h5>													
														<input type="text" value={guardianname} onChange={(e) => setGuardianname(e.target.value)} />
                                                    <h5>guardian number</h5>													
														<input type="text" value={guardiannumber} onChange={(e) => setGuardiannumber(e.target.value)} />
                                                    {/* <h5>course</h5>													
														<input type="text" value={course} onChange={(e) => setCourse(e.target.value)} /> */}

                                                    
												</div>
												<input type="submit" value="SUBMIT" />
                                                <li class={toggleState === 0 ? "resp-tab-item" : "resp-tab-item"} aria-controls="tab_item-0" style={{ color: isActive ? '' : '#B3E03F', }} role="tab" onClick={() => toggleTab(0)}><span>BIO-DATA</span></li>			
											</form>
											<div class="single-bottom">
													<ul>
														<li>
															<input type="checkbox"  id="brand" value="" />
															<label for="brand"><span></span>By checking this box, I agree to the Terms & Conditions & Privacy Policy.</label>
														</li>
													</ul>
											</div>
										</div>
									</div>
                                    <div className={toggleState === 1 ? "tab_item-1" : "tab-1 resp-tab-content"} aria-labelledby="tab_item-1">
									{/* <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-1"> */}
										<div class="payment-info">
											<h3>O LEVEL MARKS</h3>
                                            <div class="tab-for">
                                            <h5>biology</h5>
														<input type="text" value={biology} onChange={(e) => setBiology(e.target.value)} />
													<h5>chemistry</h5>													
														<input type="text" value={chemistry} onChange={(e) => setChemistry(e.target.value)} />
													<h5>mathematics</h5>													
														<input type="text" value={mathematics} onChange={(e) => setMathematics(e.target.value)} />
                                                    <h5>physics</h5>													
														<input type="text" value={physics} onChange={(e) => setPhysics(e.target.value)} />
                                                    <h5>agriculture</h5>													
														<input type="text" value={agriculture} onChange={(e) => setAgriculture(e.target.value)} />
                                                    <h5>fn</h5>													
														<input type="text" value={fn} onChange={(e) => setFn(e.target.value)} />
                                                    <h5>history</h5>													
														<input type="text" value={history} onChange={(e) => setHistory(e.target.value)} />
                                                    <h5>cre</h5>													
														<input type="text" value={cre} onChange={(e) => setCre(e.target.value)} />
                                                    <h5>ire</h5>													
														<input type="text" value={ire} onChange={(e) => setIre(e.target.value)} />
                                                    <h5>art</h5>													
														<input type="text" value={fineart} onChange={(e) => setFineart(e.target.value)} />
                                                    <h5>geography</h5>													
														<input type="text" value={geography} onChange={(e) => setGeography(e.target.value)} />
                                                    <h5>literture</h5>													
														<input type="text" value={literature} onChange={(e) => setLiterature(e.target.value)} />
                                                    <h5>economics</h5>													
														<input type="text" value={economics} onChange={(e) => setEconomics(e.target.value)} />
                                                    <h5>rukiga</h5>													
														<input type="text" value={rukiga} onChange={(e) => setRukiga(e.target.value)} />
                                                    <h5>luganda</h5>													
														<input type="text" value={luganda} onChange={(e) => setLuganda(e.target.value)} />
                                                    <h5>entpreneurship</h5>
														<input type="text" value={entpreneurship} onChange={(e) => setEntpreneurship(e.target.value)} />
													<h5>english</h5>													
														<input type="text" value={english} onChange={(e) => setEnglish(e.target.value)} />
													<h5>computer</h5>													
														<input type="text" value={computer} onChange={(e) => setComputer(e.target.value)} />
                                                    <h5>technical drawing</h5>													
														<input type="text" value={technicaldrawing} onChange={(e) => setTechnicaldrawing(e.target.value)} />
                                                    <h5>french</h5>													
														<input type="text" value={french} onChange={(e) => setFrench(e.target.value)} />
                                                    <h5>accounting</h5>													
														<input type="text" value={accounting} onChange={(e) => setAccounting(e.target.value)} />
                                                    <h5>kiswahili</h5>													
														<input type="text" value={kiswahili} onChange={(e) => setKiswahili(e.target.value)} />
                                                    <h5>commerce</h5>													
														<input type="text" value={commerce} onChange={(e) => setCommerce(e.target.value)} />
                                                    <h5>chinesse</h5>													
														<input type="text" value={chinesse} onChange={(e) => setChinesse(e.target.value)} />
                                            </div>
											{/* <a href="#">Continue</a> */}
                                             <a class={toggleState === 0 ? "resp-tab-item" : "resp-tab-item"} aria-controls="tab_item-0" role="tab" onClick={() => toggleTab(0)}>continue</a>
										</div>
									</div>
                                    <div className={toggleState === 2 ? "tab_item-2" : "tab-1 resp-tab-content"} aria-labelledby="tab_item-2">
									{/* <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-2"> */}
										<div class="payment-info">
											<h3>A LEVEL MARKS</h3>
											<div class="tab-for">
                                                <h5>bio</h5>
                                                    <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
                                                <h5>chem</h5>													
                                                    <input type="text" value={chem} onChange={(e) => setChem(e.target.value)} />
                                                <h5>mtc</h5>													
                                                    <input type="text" value={mtc} onChange={(e) => setMtc(e.target.value)} />
                                                <h5>phy</h5>													
                                                    <input type="text" value={phy} onChange={(e) => setPhy(e.target.value)} />
                                                <h5>agric</h5>													
                                                    <input type="text" value={agric} onChange={(e) => setAgric(e.target.value)} />
                                                <h5>fn</h5>													
                                                    <input type="text" value={foodnutrition} onChange={(e) => setFoodnutrition(e.target.value)} />
                                                <h5>History</h5>													
                                                    <input type="text" value={hist} onChange={(e) => setHist(e.target.value)} />
                                                <h5>divinity</h5>													
                                                    <input type="text" value={divinity} onChange={(e) => setDivinity(e.target.value)} />
                                                <h5>ire</h5>													
                                                    <input type="text" value={islam} onChange={(e) => setIslam(e.target.value)} />
                                                <h5>art</h5>													
                                                    <input type="text" value={art} onChange={(e) => setArt(e.target.value)} />
                                                <h5>Geog</h5>													
                                                    <input type="text" value={geog} onChange={(e) => setGeog(e.target.value)} />
                                                <h5>lit</h5>													
                                                    <input type="text" value={lit} onChange={(e) => setLit(e.target.value)} />
                                                <h5>econ</h5>													
                                                    <input type="text" value={econ} onChange={(e) => setEcon(e.target.value)} />
                                                <h5>ruk</h5>													
                                                    <input type="text" value={ruk} onChange={(e) => setRuk(e.target.value)} />
                                                <h5>lug</h5>													
                                                    <input type="text" value={lug} onChange={(e) => setLug(e.target.value)} />
                                                <h5>ent</h5>													
                                                    <input type="text" value={ent} onChange={(e) => setEnt(e.target.value)} />
                                                <h5>ICT</h5>													
                                                    <input type="text" value={ict} onChange={(e) => setIct(e.target.value)} />
                                                <h5>sub mtc</h5>													
                                                    <input type="text" value={submaths} onChange={(e) => setSubmaths(e.target.value)} />
                                                <h5>gp</h5>													
                                                    <input type="text" value={gp} onChange={(e) => setGp(e.target.value)} />
											</div>
										</div>
									</div>
                                    <div className={toggleState === 3 ? "tab_item-3" : "tab-1 resp-tab-content"} aria-labelledby="tab_item-3">
									{/* <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-3">	 */}
										<div class="payment-info">
											
											<h3 class="pay-title">Dedit Card Info</h3>
											<form>
												<div class="tab-for">
                                                <h5>certificate</h5>													
                                                    <input type="text" value={certificate} onChange={(e) => setCertificate (e.target.value)} />
                                                <h5>diploma</h5>													
                                                    <input type="text" value={diploma} onChange={(e) => setDiploma(e.target.value)} />
                                                <h5>bachelors</h5>													
                                                    <input type="text" value={bachelors} onChange={(e) => setBachelors(e.target.value)} /> 				
												</div>	
												<input type="submit" value="SUBMIT" />
											</form>
										
											<div class="single-bottom">
													<ul>
														<li>
															<input type="checkbox"  id="brand" value="" />
															<label for="brand"><span></span>By checking this box, I agree to the Terms & Conditions & Privacy Policy.</label>
														</li>
													</ul>
											</div>
										</div>	
									</div>
								</div>	
							</div>
						</div>	

		</div>
		<p class="footer">Copyright © 2016 Payment Form Widget. All Rights Reserved | Template by <a href="https://w3layouts.com/" target="_blank">w3layouts</a></p>
	</div>
        </div>
    )
}
export default Register