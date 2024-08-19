import React from "react";
import Layout from "../../components/layout";

const AuthenticatedLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Layout>{children}</Layout>;
};

export default AuthenticatedLayout;
