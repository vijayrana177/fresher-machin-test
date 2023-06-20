
  // Add Contact
const AddContact = () => {
         const [formData, setFormData] = useState({/*Form fields*/});

     const handleSubmit = (event) => {
     event.preventDefault();
    // Add new contact to local state
         setContacts((prevContacts) => [...prevContacts, formData]);
    
    setFormData({/* Clear Data */});
  };
  return (
  );
};
