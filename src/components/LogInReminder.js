const LogInReminder = () => {
  return (
    <div className="container mt-5" data-testid="login-reminder">
      <div className="alert alert-danger text-center" role="alert">
        <h2>Please Log In First</h2>
      </div>
    </div>
  );
};

export default LogInReminder;
