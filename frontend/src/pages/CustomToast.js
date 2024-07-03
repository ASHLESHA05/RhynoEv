// CustomToast.jsx
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ closeToast, onYes, onNo }) => (
  <div>
    <p>Are you sure?</p>
    <button onClick={() => { onYes(); closeToast(); }}>Yes</button>
    <button onClick={() => { onNo(); closeToast(); }}>No</button>
  </div>
);

export default CustomToast;
