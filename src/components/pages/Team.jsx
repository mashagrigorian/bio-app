import React from "react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <section>
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">{t("ourTeam")}</h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("ourTeamHead")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("headPosition")}
                </h6>
                <p class="font-weight-normal dark-grey-text">{t("viewBio")}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("ourTeamHead2")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("headPosition2")}
                </h6>
                <p class="font-weight-normal dark-grey-text">{t("viewBio")}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">{t("teamName")}</h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("member1")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("member1Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("member2")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("member2Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("member3")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("member3Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("member4")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("member4Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("member5")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("member5Position")}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">{t("teamName2")}</h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName2Member1")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("Acting Head of the Department")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName2Member2")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName2Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName2Member3")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName2Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName2Member4")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName2Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName2Member5")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName2Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName2Member6")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName2Member6Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName2Member7")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName2Member7Position")}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">{t("teamName3")}</h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName3Member1")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName3Member1Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName3Member2")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName3Member2Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName3Member3")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName3Member3Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName3Member4")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName3Member4Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName3Member5")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName3Member5Position")}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">{t("teamName4")}</h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName4Member1")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName4Member1Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName4Member2")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName4Member2Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName4Member3")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName4Member2Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName4Member4")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName4Member3Position")}
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("teamName4Member5")}
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  {t("teamName4Member3Position")}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">{t("experts")}</h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("expert1")}
                </h4>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("expert2")}
                </h4>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("expert3")}
                </h4>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  {t("expert4")}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
