const DashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode
  users: React.ReactNode
  revenue: React.ReactNode
  notifications: React.ReactNode
}) => {
  return (
    <>
      <div>{children}</div>
      <div>{users}</div>
      <div>{revenue}</div>
      <div>{notifications}</div>
    </>
  )
}

export default DashboardLayout
