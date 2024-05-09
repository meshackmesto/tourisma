function SignUp() {
  const signup = useOutletContext();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [notification, setNotification] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function passwordsMatch() {
    return formData.password === formData.confirmPassword;
  }

  function handleSignUp(e) {
    e.preventDefault();

    // Check if password and confirm password match
    if (!passwordsMatch()) {
      setNotification("Password does not match");
      return;
    }

    // Check if the account exists
    axios
      .get(`http://localhost:8000/users?email=${formData.email}`)
      .then((response) => {
        // If user already exists, set notification
        if (response.data.length > 0) {
          setNotification("Account already exists");
        } else {
          // If user doesn't exist, create the account
          axios
            .post("http://localhost:8000/users", formData)
            .then((response) => {
              setNotification("Account created");
              signup(formData);
              console.log("User signed up successfully:", response.data);
              // Optionally, reset the form after successful sign-up
              setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
            })
            .catch((error) => {
              console.error("Error signing up:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error checking account:", error);
      });
  }
