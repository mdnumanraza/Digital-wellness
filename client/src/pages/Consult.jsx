import './Consult.css'

const Consult = () => {
  const url = 'https://source.unsplash.com/600x400/?doctor'
  const psychiatristsInBengaluru = [
    {
      name: "Dr. Rajesh Kumar",
      address: "Apollo Hospitals, 123 ABC Street, Bengaluru",
      experience: "15+ years",
      picture: url,
      description: "Specializing in anxiety and depression.",
    },
    {
      name: "Dr. Priya Sharma",
      address: "Atria Clinic, 456 XYZ Avenue, Bengaluru",
      experience: "12 years",
      picture:
        url,
      description: "Dedicated to helping individuals with bipolar disorder.",
    },
    {
      name: "Dr. Sanjay Gupta",
      address: "Bengaluru Mental Health Institute, 789 PQR Road, Bengaluru",
      experience: "18 years",
      picture:
        url,
      description: "Expert in child and adolescent psychiatry.",
    },
    {
      name: "Dr. Anjali Desai",
      address: "Lotus Wellness Center, 1011 LMN Lane, Bengaluru",
      experience: "20+ years",
      picture:
       url,
      description: "Specializes in addiction therapy.",
    },
    {
      name: "Dr. Suresh Patel",
      address: "Apollo Hospitals, 1415 RST Street, Bengaluru",
      experience: "14 years",
      picture:
        url,
      description: "Providing care for mood disorders.",
    },
    {
      name: "Dr. Meera Reddy",
      address: "Atria Clinic, 1617 UVW Avenue, Bengaluru",
      experience: "9 years",
      picture:
      url,
      description: "Focused on post-traumatic stress disorder.",
    },
    {
      name: "Dr. Vikram Singh",
      address: "Bengaluru Mental Health Institute, 1819 XYZ Road, Bengaluru",
      experience: "11 years",
      picture:
      url,
      description: "Expertise in geriatric psychiatry.",
    },
    {
      name: "Dr. Nandini Choudhury",
      address: "Lotus Wellness Center, 2021 ABC Lane, Bengaluru",
      experience: "13 years",
      picture:
      url,
      description: "Specializing in eating disorders.",
    },
   
    
    {
      name: "Dr. Roshni Kapoor",
      address: "Lotus Wellness Center, 4445 KLM Road, Bengaluru",
      experience: "14 years",
      picture: url,
      description: "Specializes in mood disorders.",
    },
  ];
  return (
    <div className="consult">
      <h2>Consult  Psychiatrist</h2>
      <div className="docs">
        {/*
          {psychiatristsInBengaluru.map((psychiatrist, index) => (
          <li key={index}>
            <h2>{psychiatrist.name}</h2>
            <p><strong>Address:</strong> {psychiatrist.address}</p>
            <p><strong>Experience:</strong> {psychiatrist.experience}</p>
            <img src={psychiatrist.picture} alt={psychiatrist.name} />
            <p>{psychiatrist.description}</p>
          </li>
        ))}
        */}
        {psychiatristsInBengaluru.map((psychiatrist, index) => (
          <div className="doc" key={index}>
            <div className="top-doc">
              <img
                src={psychiatrist.picture}
                alt={psychiatrist.name}
                className="doc-pro"
              />
            </div>
            <div className="bottom-doc">
              <p>
                <b>{psychiatrist.name}</b>
              </p>
              <p>{psychiatrist.address}</p>
              <p>
                <b>{psychiatrist.description}</b>
              </p>
              <button className="doc-btn">
                Contact Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Consult
