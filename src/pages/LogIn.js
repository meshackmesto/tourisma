
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

  }
