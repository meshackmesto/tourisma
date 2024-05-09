
function Login() {
  // Get the login function from the outlet context
  const login = useOutletContext();

  // Initialize state variables
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [notification, setNotification] = useState("");

  // Handle changes to the form input fields
  function handleChange(e) {
    // Update the corresponding form data field with the new value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Handle form submission
  function handleLogin(e) {
    e.preventDefault();
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        const user = response.data.find(
          (user) =>
            user.username === formData.username &&
            user.password === formData.password
        );
        if (user) {
          setNotification("Success");
          login(user);
        } else {
          setNotification("Incorrect username or password. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        setNotification("An error occurred. Please try again later.");
      });
  }
  
