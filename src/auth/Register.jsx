// src/auth/register.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRegisterUserMutation } from "../services/authApi.js";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required ❌"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required ❌"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required ❌"),
  profileUrl: Yup.string().url("Must be a valid URL").nullable(),
  bio: Yup.string(),
});

export default function Register() {
  const [registerUser] = useRegisterUserMutation();

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        profileUrl: "",
        bio: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
        setStatus({ error: null, success: null });
        try {
          const result = await registerUser(values).unwrap();
          setStatus({ success: "Registration successful ✅ You can login now!" });
          console.log("Registered user:", result);
          resetForm();
        } catch (err) {
          setStatus({
            error: err?.data?.error || err?.data?.message || "Something went wrong ❌",
          });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status, touched, errors }) => (
        <Form className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Register</h2>

          {status?.error && <p className="text-red-600">{status.error}</p>}
          {status?.success && <p className="text-green-600">{status.success}</p>}

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Username</label>
            <Field
              type="text"
              name="username"
              className={`w-full border p-2 rounded ${
                touched.username && errors.username ? "border-red-500" : "border-gray-300"
              }`}
            />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <Field
              type="email"
              name="email"
              className={`w-full border p-2 rounded ${
                touched.email && errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <Field
              type="password"
              name="password"
              className={`w-full border p-2 rounded ${
                touched.password && errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Profile URL</label>
            <Field
              type="text"
              name="profileUrl"
              placeholder="https://example.com/profile.png"
              className={`w-full border p-2 rounded ${
                touched.profileUrl && errors.profileUrl ? "border-red-500" : "border-gray-300"
              }`}
            />
            <ErrorMessage name="profileUrl" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Bio</label>
            <Field as="textarea" name="bio" className="w-full border p-2 rounded border-gray-300" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
