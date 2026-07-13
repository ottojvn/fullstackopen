export const Notification = ({ message, isError = true }) => {
  if (message === null) {
    return
  }

  const notificationStyle = {
    color: isError ? 'red' : 'green',
    background: 'lightgrey',
    fontSize: 16,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  return (
    <div>
      <p style={notificationStyle}>{message}</p>
    </div>
  )
}
