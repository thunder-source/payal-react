import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="  bg-gradient-to-r from-gray-900 to-gray-800 h-96 mt-20">
        <div class="max-w-6xl mx-auto py- px-4 sm:px-6 lg:px-8">
          <div class="flex ">
            <img
              src="https://pahaldesign.com/wp-content/uploads/2015/04/pahal-logo-300x120.png"
              alt=""
              className="h-32 w-32 py-8 mr-96 logos"
            />
            {/* <img
              className="map"
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
            /> */}
          </div>
          <div className="text-white text-left map-text">
            <p>PahalDesign Education Private Limited</p>
            <p>G-8, 2nd Floor, G Block Market, Hauz Khas, New Delhi-110016</p>

            <p>Landmark: Near Punjab National Bank</p>

            <p>Contact No: 8800-22-6864, 011-40106405</p>
            <p>Email: corporate@pahaldesign.com</p>
          </div>
          {/* <img
            className="map"
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          /> */}
          <iframe
            title="map"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112113.32945134779!2d77.1424256!3d28.5835264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682591820603!5m2!1sen!2sin"
            // width="600"
            // height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </div>
  );
}
