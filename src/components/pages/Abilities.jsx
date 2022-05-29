import React from "react";

const Abilities = () => {
  return (
    <>
      <div className="abilities">
        <span>
          ՀՀ շրջակա միջավայրի նախարարության «Բնապահպանական ծրագրերի իրականացման
          գրասենյակ» պետական հիմնարկի գործունեության հիմնական նպատակը Հայաստանի
          Հանրապետության բնապահպանության ոլորտի ծրագրերի արդյունավետ իրականացման
          ապահովումն է: Գործունեության հիմնական ոլորտներն են ՀՀ կառավարության
          կողմից հավանության արժանացած՝ ՀՀ ՇՄՆ-ն և տարածքային կառավարման
          մարմինների, ՀՀ պետական բյուջեի, ինչպես նաև օտարերկրյա պետությունների
          ու միջազգային վարկատու և դրամաշնորհային կազմակերպությունների կողմից
          Հայաստանի Հանրապետությանը տրամադրվող միջոցների հաշվին մշակված շրջակա
          միջավայրի ոլորտի ծրագրերը և աշխատանքները, այդ թվում`
        </span>
        <ul
          style={{
            margin: "25px 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            justifyItems: "center",
            gap: "10px",
          }}
        >
          <li>
            Ընդերքի պահպանություն
            <img
              className="our-abilities-images"
              src="https://cdn2.vectorstock.com/i/1000x1000/34/41/trolley-mineral-resource-icon-on-white-vector-23823441.jpg"
            />
          </li>
          <li>
            Հողային ռեսուրսների պահպանություն
            <img
              className="our-abilities-images"
              src="https://cdn3.vectorstock.com/i/1000x1000/29/77/land-resources-concept-icon-vector-28882977.jpg"
            />
          </li>
          <li>
            Ջրային ռեսուրսների պահպանություն
            <img
              className="our-abilities-images"
              src="https://pngset.com/images/water-resources-icon-logo-symbol-trademark-balloon-transparent-png-1610252.png"
            />
          </li>
          <li>
            Մթնոլորտի պահպանություն
            <img
              className="our-abilities-images"
              src="https://cdn-icons-png.flaticon.com/512/2856/2856787.png"
            />
          </li>
          <li>
            Կենսաբազմազանության պահպանություն
            <img
              className="our-abilities-images"
              src="https://cdn3.vectorstock.com/i/1000x1000/18/07/biodiversity-concept-icon-natural-ecosystem-vector-29161807.jpg"
            />
          </li>
          <li>
            Բնության հատուկ պահպանվող տարածքների պահպանություն
            <img
              className="our-abilities-images"
              src="https://image.shutterstock.com/image-vector/forest-natural-protected-area-black-260nw-1959235360.jpg"
            />
          </li>
          <li>
            Բնական ռեսուրսների կառավարում
            <img
              className="our-abilities-images"
              src="https://e7.pngegg.com/pngimages/773/983/png-clipart-computer-icons-nature-natural-resource-sustainability-natural-environment-leaf-company-thumbnail.png"
            />
          </li>
          <li>
            Շրջակա միջավայրի պահպանություն
            <img
              className="our-abilities-images"
              src="https://cdn3.vectorstock.com/i/1000x1000/90/72/environment-icon-in-circle-vector-18879072.jpg"
            />
          </li>
        </ul>
      </div>
      <div className="abilities">
        <span>
          Բնապահպանական ծրագրերի իրականացման գրասենյակի կարողություններն են՝
        </span>
        <ol>
          <li>պետական ծրագրերի, </li>
          <li>
            ապրանքների, աշխատանքների, ծառայությունների գնման ընթացակարգերի
            իրականացում
          </li>
          <li>ֆինանսների կառավարում</li>
          <li>փաստաթղթաշրջանառության ապահովում</li>
          <li>միջազգային համագործակցություն</li>
          <li>ծրագրերի, հայեցակարգերի նախագծային աշխատանքներ</li>
          <li>մշտադիտարկում և փորձագիտական գնահատում</li>
        </ol>
      </div>
    </>
  );
};

export default Abilities;
