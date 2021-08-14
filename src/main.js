import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueI18n from "vue-i18n";
import BackToTop from 'vue-backtotop'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(BackToTop);

const messages = {
  en: {
    menu: ["Home", "About DNP", "DNP Printers", "Media", "Accessories", "About us", "Contact"],

    // HOME
    home: {
      bg: {
        title: 'DNP KIOSK ŠTAMPAČI',
        subtitle: 'Dai Nippon Printing (DNP) osnovan je još davne 1876. godine da bi postao prva štamparska kompanija u Japanu.'
      },
      dnp: {
        title: "Zašto DNP printeri?",
        text: ['Dai Nippon Printing (DNP) osnovan je još davne 1876. godine da bi postao prva štamparska kompanija u Japanu.', 'Danas je DNP Grupa jedna od najvećih kompanija za štampu / premazivanje u svetu, sa oko 40.000 zaposlenih širom sveta. DNP trenutno radi sa 58 postrojenja u Japanu i prekooceanskim zemljama, a aktivnosti uključuju komercijalnu štampu, pakovanje, dekorativni materijal, elektroniku, poslovne forme i informacije o medijima. Proširena tehnologija štampe je temeljna politika DNP-a od 1950-ih.']
      },
      printer: {
        title: 'DS620 6-INCH PHOTO PRINTER',
        text: 'DS620 će preuzeti ulogu novog vodećeg modela u DNP-ovoj liniji štampača. Sa novim ključnim karakteristikama povećane trajnosti, isplativosti i inovativnosti, on postavlja pravi ton da postane bestseler. Nadalje, svojim kompaktnim i dobro dizajniranim tijelom privlači i kiosk integratore i fotografsku maloprodaju. Štampač je spreman za svakodnevno težak zadatak u vašem poslovanju. DNP Photo Imaging Europe nudi poboljšanu garanciju uključenu za vas, sa standardnom garancijom od 2 godine i do 100.000 otisaka * na termalnoj glavi štampača.'
      }
    },

    // DNP
    dnp: {
      title: 'About DNP',
      text: ['Dai Nippon Printing (DNP) was established in as far back as 1876, to become the first full-scale printing company in Japan.', 'Today, the DNP Group is one of the largest diversified printing/coating technology companies in the world, with approximately 40,000 employees worldwide. DNP is currently operating 58 plants in Japan and overseas, and activities include commercial printing, packaging, decorative material, electronics, business forms and information media supplies. Expanding printing technology has been a fundamental DNP policy since the 1950s.', 'Specifically in the photofinishing markets, DNP has been the pioneer of dye sublimating printing technology and is the world’s largest manufacturer of dye sublimation ribbons. In a highly specialised industry, worldwide production in large scale is making sure you are being served on the competitive edge.', 'DNP Photo Imaging Europe combines more than 20 years of experience in photo printing and kiosk deployment. A key strength is delivering the most flexible and innovative solutions to customer expectations. A full network of distribution partners in Europe and Northern Africa make sure that reliable solutions are accessible in every part of the zone.', 'DNP has the broadest selection of solutions for the photo retail market and products designed to address retailer’s specific business goals and objectives – backed by the quality and reliability our customers expect.']
    },
    // ABOUT
    about: {
      title: "About us",
      text: ["Preduzeće City Market doo je osnovano 26.07.2006.godine. Osnovna delatnost je veleprodaja fotografskog repromaterijala, opreme i pribora. Želja osnivača ovog preduzeća je da iskustvo stečeno dugogodišnjim bavljenjem fotografskim zanatom, podeli kako sa svojim kupcima i korisnicima usluga, tako i sa ostalim ljubiteljima fotografije.",
      "Vašu pažnju usmeravamo na deo proizvodnog programa japanske korporacije DNP, koja je lider u inovativnim tehnikama štampe fotografije.", 
      "Radi se o štampačima koji koriste sublimacionu metodu štampe, čija je jedna od glavnih karakteristika visok stepen zaštite i višedecenijska trajnost otiska.", 
      "Pozivamo Vas kako bi sa Vama podelili iskustva vezana za mogućnosti rada ovih uređaja.",
      "City Market DOO"],
      // "City Market DOO"],
      // text: "Preduzeće Fotolusio doo je osnovano 30.septembra 2013.godine. Osnovna delatnost je veleprodaja fotografskog repromaterijala, opreme i pribora. Želja osnivača ovog preduzeća je da iskustvo stečeno dugogodišnjim bavljenjem fotografskim zanatom, podeli kako sa svojim kupcima i korisnicima usluga, tako i sa ostalim ljubiteljima fotografije.",
      info: ["Trading and service company", "City Market d.o.o. Krusevac", "Aleksandra Fleminga 41,", "37000 Krusevac", "Republic of Serbia"],
    },

    // CONTACT
    contact: {
      title: "Contact",
      contactInfo: "Contact information",
      contactUs: "Contact us",
      writeUs: "Write us",
      writeUsText: "Do you have a question, suggestion or criticism?",
      writeUsForm: {
        name: "Full name",
        email: "Email",
        title: "Title",
        message: "Your message",
        send: "Send a message",
      },
      workTime: ["Working hours", "Monday - Friday"],
      phone: "Phone",
      mobile: "Mobile",
      street: "Aleksandra Fleminga 41",
      city: "37000 Krusevac",
      country: "Republic of Serbia"
    },

    // DNP Printers
    printers: {
      title: "Printers",
      list: [
        // DS620
        {
          name: 'DNP Printer DS620',
          path: 'DS620',
          title: 'DNP DS620',
          reference: '212620',
          condition: 'New product',
          conditionPlus: 'The new DS620 allows you to offer even more photo formats, including the popular  formats from the same media (e.g. 15x20 and 15x10, and even photo strips in 5x15cm)',
    
          info: {
            generalFeatures: '',
            printModes: 'High Speed, High Quality',
            printMethod: 'Dye Sublimation Thermal Transfer',
            printResolution: '300x300dpi, 300x600dpi',
            printSizes:'4 x 6", 5 x 7", 6 x 8", 6 x 9"',
            dimensionsWeight: '',
            dimensionsWxDxH: '275 x 366 x 170 mm',
            withoutPaperorRibbon: '12kg',
            other:'',
            printFinish: 'Glossy & Matte',
            frontLoading: 'Yes',
            computerInterface:'USB 2.0',
            driverSoftware: 'Windows XP, Windows Vista, Windows 7 (32 bits), Windows 7 (64 bits), Windows 8 (32 bits), Windows 8 (64bits), MAC OS X 10.6 (Snow Leopard), MAC OS X 10.7 (Lion), MAC OS X 10.8 (Mountain Lion), MAC OS X 10.9 (Mavericks)',
            powerSupplyVoltage: 'AC 120 ~ 140V 50/60 Hz, AC 220 ~ 240V 50/60 Hz',
            manufacturer: 'DNP',
            warranty: '2 yars./ or 100 000 copy'
          }
        }, 
        // DS820
        {
          name: 'DNP Printer DS820',
          path: 'DS820',
          title: 'DNP DS820',
          reference: '212820',
          condition: 'New product',
          conditionPlus:'Offering two types of consumables and meeting the demands of an extended choice of photo formats up to 8x32’’ panorama (*via SDK), this state-of-the-art printer boosts a great image quality that perfectly fits the professional and event photo studio needs.',
          info: {
            generalFeatures: '',
            printModes: '',
            printMethod: '',
            printResolution: '',
            printSizes:'',
            dimensionsWeight: '',
            dimensionsWxDxH: '',
            withoutPaperorRibbon: '',
            other:'',
            printFinish: '',
            frontLoading: '',
            computerInterface:'',
            driverSoftware: '',
            powerSupplyVoltage: '',
            manufacturer: '',
            warranty: ''
          }
    
        }, 
        // RX1HS
        {
          name: 'DNP Printer RX1HS',
          path: 'RX1HS',
          title: 'DNP DS-RX1HS',
          reference: '123456',
          condition: 'New product',
          conditionPlus: 'This RX1HS’s improved print speeds allow you to produce 290 4x6” (10x15cm) prints per hour compared to 249 prints for the RX1 printer**. For example, a 4x6’’ photo would be printed in 15 seconds with the RX1, while it would take only 12.4 with the RX1HS*. It can even decrease by 5 seconds the printing time of a 6x8’’ photo.'
          
        },
        // QW410
        {
          name: 'DNP Printer QW410',
          path: 'QW410',
          title: 'DNP QW410',
          reference: '212410',
          condition: 'New product',
          conditionPlus: 'The QW410 printer is the most compact, lightest and first 4.5-inch model in DNP’s printer lineup. The possibility to work with an external battery makes it portable. Easy to handle and transport, this space-saving and nomadic new printer is specifically attractive for System Integrators, Event players and ID market. Small in size, big on features!',
          info: {
            generalFeatures: 'The QW410 printer is the most compact, lightest and first 4.5-inch model in DNP’s printer lineup. Offering the possibility to work with an external battery.',
            photoSize:[
              '10х15 cm, speed: 18.8 sek.','11х20 cm, speed: 23.1 sek.'
            ],
            consumables:[
              'QW410 10x15 cm.PD - 150 prints/roll - 2 rolls/box - 212424','QW410 10x15 cm.SD - 150 prints/roll - 2 rolls/box - 212414','QW410 11x20 cm. ( 4.5x8") PD - 110 prints/roll - 2 rolls/box','QW410 11x20 cm. ( 4.5x8") SD - 110 prints/roll - 2 rolls/box'
            ],
            printTrendySizes:[
              '10 х 15 cm - 4х6"','11 х 20 cm - 4.5х8"'
            ],
            squareSize:[
              '10 х 10 cm. - 4х4"','11 х 11 cm. - 4.5х4.5"','5 х 10 cm - 2х4"','5 х 11 cm - 2х4.5"'
            ],
            resolution: '300х300 dpi',
            computerInterface:'USB 2.0',
            dimensionsWxDxH: '208х198х240мм',
            approxWeight: '5.8kg',
            warranty: '1 year or 10,000 prints, whichever comes first'
          }
        },
        // DS40
        {
          name: 'DNP Printer DS40',
          path: 'DS40',
          reference: '212040',
          condition: 'New product',
          conditionPlus: 'The preferred photo printer of leading system integrators and photo professionals.',
          title: 'DNP DS40',
          info: {
            printMethod: 'Dye Sublimation Thermal Transfer',
            printModes: 'High Speed, High Quality',
            printResolution: '300x300dpi, 300x600dpi',
            printSizes:[
              '2x6 (1*) - 50.5x152 mm','PC - 101x152mm','2L - 127x178 mm','A5 - 152x203 mm','A5W - 152x229 mm'
            ],
            printNumbers:[
              'PC - 400 sheets','2L - 230 sheets','A5 - 200 sheets','A5W - 2x180 sheets'
            ],
            printSpeed:[
             'PC - 8,9 sec./sheet - 11,7 sec./sheet','PC 2-up (2*) - 7,4 sec./sheet - 10 sec./sheet','2L - 12,8 sec./sheet - 17,4 sec./sheet','A5 - 13,9 sec./sheet - 19,3 sec./sheet','A5W - 16,4 sec./sheet - 22,4 sec./sheet'
            ],
            ribbonFinish: 'YMC + overcoat',
            computerInterface:'USB 2.0 (Max. 480 Mbps)',
            bufferSize: 'For two images (3*)',
            driverSoftware:'Windows 2000 / XP / VISTA / 7 / 8 - MAC OS 10.6 - 10.8',
            externalDimension: '322Wx366Dx170H',
            approxWeight:'Env. 14kg',
            powerSupplyVoltage: '100V~240V CA 50/60 Hz',
            powerConsumption:'100V 3.96A 240V 1.69A',
            accessories: 'EU power supply cord',
            options:[
              'Paper tray (L and PC)','Paper spacer (L or PC)'
            ],
            productCode: '202 842',
            commodityCode:'844332109000 J'
          }
    
        }
      ]
    },
    
    // MEDIA
    media: {
      title: 'Media',
      list: [
        // {
        //   name: ['DS620 10X15CM', '(4X6")'],
        //   path: 'ds620-10x15cm(4x6)',
        //   image: 'DS6204X6.jpg',
        //   size: '10x15cm  4"x 6"',
        //   printsPerRoll: '400',
        //   rollsPerCase: '2',
        //   totalPrints: '800'
        // },
        {
          name: ['DS620 13X18CM', '(5X7")'],
          path: 'ds620-13x18cm(5x7)',
          image: 'DS6205X7.jpg',
          reference: '212627',
          size: '13x18cm  5"x 7"',
          printsPerRoll: '230',
          rollsPerCase: '2',
          totalPrints: '460'
        },
        {
          name: ['DS620 15X20CM', '(6X8")'],
          path: 'ds620-15x20cm(6x8)',
          image: 'DS6206X8.jpg',
          reference: '212628',
          size: '15x20cm  6"x 8"',
          printsPerRoll: '200',
          rollsPerCase: '2',
          totalPrints: '400'
        },
        {
          name: ['DS620 15X20CM', '(6X8")LX METALLIC'],
          path: 'ds620-15x20cm(6x8)-lx-metallic',
          image: 'Metallic_media_6x8.jpg',
          reference: '212926',
          size: '15x20cm  6"x 8"',
          printsPerRoll: '200',
          rollsPerCase: '1',
          totalPrints: '200'
        },
        // {
        //   name: ['DS620 15X23CM', '(6X9")'],
        //   path: 'ds620-15x23cm(6x9)',
        //   image: 'DS6206X9.jpg',
        //   size: '15x20cm  6"x 9"',
        //   printsPerRoll: '180',
        //   rollsPerCase: '2',
        //   totalPrints: '360'
        // },
        {
          name: ['DS820 20X25CM', '(8X10")PP'],
          path: 'ds820-20x25cm(8x10)-pp',
          image: 'DS8208x10PP_Large.jpg',
          reference: '212821',
          size: '20x25cm  8"x 10"',
          printsPerRoll: '130',
          rollsPerCase: '2',
          totalPrints: '260'
        },
        {
          name: ['DS820 20X25CM', '(8X10")SD'],
          path: 'ds820-20x25cm(8x10)-sd',
          image: 'DS8208x10PP_Large.jpg',
          reference: '212824',
          size: '20x25cm  8"x 10"',
          printsPerRoll: '130',
          rollsPerCase: '2',
          totalPrints: '260'
        },
        {
          name: ['DS820 20X30CM', '(8X12")LX METALLIC'],
          path: 'ds820-20x30cm(8x12)-lx-metallic',
          image: 'DS820(8x12)LX_Metallic.jpg',
          reference: '212922',
          size: '20x30cm  8"x 12"',
          printsPerRoll: '110',
          rollsPerCase: '1',
          totalPrints: '110'
        },
        {
          name: ['DS820 20X30CM', '(8X12")PP'],
          path: 'ds820-20x30cm(8x12)-pp',
          image: 'DS8208x12PP_Large.jpg',
          reference: '212822',
          size: '20x30cm  8"x 12"',
          printsPerRoll: '110',
          rollsPerCase: '2',
          totalPrints: '220'
        },
        {
          name: ['DS820 20X30CM', '(8X12")SD'],
          path: 'ds820-20x30cm(8x12)-sd',
          image: 'DS8208x12SD_Large.jpg',
          reference: '212825',
          size: '20x30cm  8"x 12"',
          printsPerRoll: '110',
          rollsPerCase: '2',
          totalPrints: '220'
        },
        {
          name: ['DS820 A4 PP', ''],
          path: 'ds820-a4-pp',
          image: 'DS820A4PP_Large.jpg',
          reference: '212823',
          size: 'A4"',
          printsPerRoll: '110',
          rollsPerCase: '2',
          totalPrints: '220'
        },
        {
          name: ['DS820 A4 SD', ''],
          path: 'ds820-a4-sd',
          image: 'DS820A4SD_Large.jpg',
          reference: '212826',
          size: 'A4"',
          printsPerRoll: '110',
          rollsPerCase: '2',
          totalPrints: '220'
        },
        {
          name: ['RX1HS 10X15CM', '(4x6)'],
          path: 'rx1hs-10x15cm-(4x6)',
          image: 'RX1HS4X6_PM_E_Large.jpg',
          reference: '102114',
          size: '10x15cm  4"x 6"',
          printsPerRoll: '700',
          rollsPerCase: '2',
          totalPrints: '1400'
        },
        {
          name: ['RX1HS 13X18CM', '(5x7)'],
          path: 'rx1hs-13x18cm-(5x7)',
          image: 'RX1HS5x7400.jpg',
          reference: '102122',
          size: '13x18cm  5"x 7"',
          printsPerRoll: '400',
          rollsPerCase: '2',
          totalPrints: '800'
        },
        {
          name: ['RX1HS 15X20CM', '(6x8)'],
          path: 'rx1hs-15x20cm-(6x8)',
          image: 'RX1HS6X8_PM_E_Large.jpg',
          reference: '102115',
          size: '15x20cm  6"x 8"',
          printsPerRoll: '350',
          rollsPerCase: '2',
          totalPrints: '700'
        },
        {
          name: ['DS40 10X15CM', '(4x6)'],
          path: 'ds40-10x15cm-(4x6)',
          image: 'DS_40_4x6.jpg',
          reference: '202943',
          size: '10x15cm  4"x 6"',
          printsPerRoll: '400',
          rollsPerCase: '2',
          totalPrints: '800'
        },
        {
          name: ['DS40 13X18CM', '(5x7)'],
          path: 'ds40-13x18cm-(5x7)',
          image: 'DS_40_5x7.jpg',
          reference: '202958',
          size: '13x18cm  5"x 7"',
          printsPerRoll: '230',
          rollsPerCase: '2',
          totalPrints: '460'
        },
        {
          name: ['DS40 15X20CM', '(6x8)'],
          path: 'ds40-15x20cm-(6x8)',
          image: 'DS40_6x8v2.png',
          reference: '202953',
          size: '15x20cm  6"x 8"',
          printsPerRoll: '200',
          rollsPerCase: '2',
          totalPrints: '400'
        },
        // {
        //   name: ['DS40 15X23CM', '(6x9)'],
        //   path: 'ds40-15x23cm-(6x9)',
        //   image: 'DS40_6x9v2.png',
        //   size: '15x23cm  6"x 9"',
        //   printsPerRoll: '180',
        //   rollsPerCase: '2',
        //   totalPrints: '360'
        // },
        {
          name: ['QW410 10X15CM', '(4X6") PD'],
          path: 'qW410-10x15cm-(4X6)-pd',
          image: 'QW4104x6PD.jpg',
          reference: '212424',
          size: '10x15cm 4x6"',
          printsPerRoll: '150',
          rollsPerCase: '2',
          totalPrints: '300'
        },
        {
          name: ['QW410 10X15CM', '(4X6") SD'],
          path: 'qW410-10x15cm-(4X6)-sd',
          image: 'QW4104x6SD.jpg',
          reference: '212414',
          size: '10x15cm 4x6"',
          printsPerRoll: '150',
          rollsPerCase: '2',
          totalPrints: '300'
        },
        // {
        //   name: ['QW410 11X20CM', '(4.5X8") PD'],
        //   path: 'qW410-11x20cm-(4.5X8)-pd',
        //   image: 'QW4104x6SD.jpg',
        //   size: '10x15cm 4x6"',
        //   printsPerRoll: '110',
        //   rollsPerCase: '2',
        //   totalPrints: '220'
        // },
        // {
        //   name: ['QW410 11X20CM', '(4.5X8") SD'],
        //   path: 'qW410-11x20cm-(4.5X8)-sd',
        //   image: 'QW4104.5x8SD.jpg',
        //   size: '10x15cm 4x6"',
        //   printsPerRoll: '110',
        //   rollsPerCase: '2',
        //   totalPrints: '220'
        // }
      ] 
    },

    // Accessories
    accessories:{
      title: "Accessories",
      list: [
        {
          name: 'RIBBON CASSETTE DS620',
          path: 'ribbon-cassete-ds620',
          image: '89-thickbox_default.jpg',
          reference: '212623',
          condition: 'New product',
          info: 'Ink ribbon cassette for use with DS620 printers'
        },
        {
          name: 'Paper Tray DNP DS620 10х15сm',
          path: 'paper-tray-dnp-ds620-10х15сm',
          image: '90-thickbox_default.jpg',
          reference: '23208790S',
          condition: 'New product',
          info: 'Paper tray for use only with DNP DS620'
        },
        {
          name: 'DS620 Roll Holder 1 (Long/Left)',
          path: 'ds620-roll-holder-1-(long/left)',
          image: '91-thickbox_default.jpg',
          reference: '23208760S',
          condition: 'New product',
          info: 'DS620  Roll Holder 1 (Long/Left)'
        },
        {
          name: 'DS620 Roll Holder 2 Short/Right',
          path: 'ds620-roll-holder-2-short/right',
          image: '92-thickbox_default.jpg',
          reference: '23208770S',
          condition: 'New product',
          info: 'DS620  Roll Holder 2 (Short/Right)'
        }
      ]
    }
  },
  srb: {
    menu: ["Početna", "O DNP", "DNP Printeri","Media", "Pribor", "O nama", "Kontakt"],

    // HOME
    home: {
      bg: {
        title: 'DNP KIOSK ŠTAMPAČI',
        subtitle: 'Dai Nippon Printing (DNP) osnovan je još davne 1876. godine da bi postao prva štamparska kompanija u Japanu.'
      },
      dnp: {
        title: "Zašto DNP printeri?",
        text: ['Dai Nippon Printing (DNP) osnovan je još davne 1876. godine da bi postao prva štamparska kompanija u Japanu.', 'Danas je DNP Grupa jedna od najvećih kompanija za štampu / premazivanje u svetu, sa oko 40.000 zaposlenih širom sveta. DNP trenutno radi sa 58 postrojenja u Japanu i prekooceanskim zemljama, a aktivnosti uključuju komercijalnu štampu, pakovanje, dekorativni materijal, elektroniku, poslovne forme i informacije o medijima. Proširena tehnologija štampe je temeljna politika DNP-a od 1950-ih.']
      },
      printer: {
        title: 'DS620 6-INCH PHOTO PRINTER',
        text: 'DS620 će preuzeti ulogu novog vodećeg modela u DNP-ovoj liniji štampača. Sa novim ključnim karakteristikama povećane trajnosti, isplativosti i inovativnosti, on postavlja pravi ton da postane bestseler. Nadalje, svojim kompaktnim i dobro dizajniranim tijelom privlači i kiosk integratore i fotografsku maloprodaju. Štampač je spreman za svakodnevno težak zadatak u vašem poslovanju. DNP Photo Imaging Europe nudi poboljšanu garanciju uključenu za vas, sa standardnom garancijom od 2 godine i do 100.000 otisaka * na termalnoj glavi štampača.'
      }
    },

    dnp: {
      title: "O DNP",
      text: ['Dai Nippon Printing (DNP) was established in as far back as 1876, to become the first full-scale printing company in Japan.', 'Today, the DNP Group is one of the largest diversified printing/coating technology companies in the world, with approximately 40,000 employees worldwide. DNP is currently operating 58 plants in Japan and overseas, and activities include commercial printing, packaging, decorative material, electronics, business forms and information media supplies. Expanding printing technology has been a fundamental DNP policy since the 1950s.', 'Specifically in the photofinishing markets, DNP has been the pioneer of dye sublimating printing technology and is the world’s largest manufacturer of dye sublimation ribbons. In a highly specialised industry, worldwide production in large scale is making sure you are being served on the competitive edge.', 'DNP Photo Imaging Europe combines more than 20 years of experience in photo printing and kiosk deployment. A key strength is delivering the most flexible and innovative solutions to customer expectations. A full network of distribution partners in Europe and Northern Africa make sure that reliable solutions are accessible in every part of the zone.', 'DNP has the broadest selection of solutions for the photo retail market and products designed to address retailer’s specific business goals and objectives – backed by the quality and reliability our customers expect.']
    },

    // ABOUT
    about: {
      title: "O nama",
      text: ["Preduzeće City Market doo je osnovano 26.07.2006.godine. Osnovna delatnost je veleprodaja fotografskog repromaterijala, opreme i pribora. Želja osnivača ovog preduzeća je da iskustvo stečeno dugogodišnjim bavljenjem fotografskim zanatom, podeli kako sa svojim kupcima i korisnicima usluga, tako i sa ostalim ljubiteljima fotografije.",
      "Vašu pažnju usmeravamo na deo proizvodnog programa japanske korporacije DNP, koja je lider u inovativnim tehnikama štampe fotografije.", 
      "Radi se o štampačima koji koriste sublimacionu metodu štampe, čija je jedna od glavnih karakteristika visok stepen zaštite i višedecenijska trajnost otiska.", 
      "Pozivamo Vas kako bi sa Vama podelili iskustva vezana za mogućnosti rada ovih uređaja.",
      "City Market DOO"],
      info: ["Privredno društvo za trgovinu i usluge", "City Market d.o.o. Kruševac", "Aleksandra Fleminga 41,", "37000 Kruševac", "Republika Srbija"],
    },

    // CONTACT
    contact: {
      title: "Kontakt",
      contactInfo: "Kontakt informacije",
      contactUs: "Kontaktirajte nas",
      writeUs: "Pišite nam",
      writeUsText: "Pošaljite nam pitanje, sugestiju ili kritiku!",
      writeUsForm: {
        name: "Ime i prezime",
        email: "Email",
        title: "Naslov",
        message: "Vaša poruka",
        send: "Pošaljite poruku",
      },
      workTime: ["Radno vreme", "Ponedeljak - Petak"],
      phone: "Fiksni tel",
      mobile: "Telefon",
      street: "Aleksandra Fleminga 41",
      city: "37000 Kruševac",
      country: "Republika Srbija"
    },

    // DNP printeri
    printers: {
      title: "Printeri",
      infoDesc: [
            'General Features','Print Modes','Print Method','Print Resolution','Print Sizes','Dimensions & Weight','Dimensions (WxDxH)','Without paper or ribbon','Other','Print Finish','Front Loading','Computer Interface', 'Driver Software','Power supply voltage','Manufacturer','Warranty:'
      ],
      list: [
        // DS620
        {
          name: 'DNP Printer DS620',
          path: 'DS620',
          title: 'DNP DS620',
          reference: '212620',
          condition: 'Nov proizvod',
          conditionPlus: 'DS620 Vam omogućava da ponudite još više formata fotografija, uključujući i popularne formate (vidi specifikaciju ispod). Ovo je ajprodavaniji profesionalni foto štampač u Evropi.',
    
          info: {
            generalFeatures: '',
            printModes: 'High Speed, High Quality',
            printMethod: 'Dye Sublimation Thermal Transfer',
            printResolution: '300x300dpi, 300x600dpi',
            printSizes:'4 x 6", 5 x 7", 6 x 8", 6 x 9"',
            dimensionsWeight: '',
            dimensionsWxDxH: '275 x 366 x 170 mm',
            withoutPaperorRibbon: '12kg',
            other:'',
            printFinish: 'Glossy & Matte',
            frontLoading: 'Yes',
            computerInterface:'USB 2.0',
            driverSoftware: 'Windows XP, Windows Vista, Windows 7 (32 bits), Windows 7 (64 bits), Windows 8 (32 bits), Windows 8 (64bits), MAC OS X 10.6 (Snow Leopard), MAC OS X 10.7 (Lion), MAC OS X 10.8 (Mountain Lion), MAC OS X 10.9 (Mavericks)',
            powerSupplyVoltage: 'AC 120 ~ 140V 50/60 Hz, AC 220 ~ 240V 50/60 Hz',
            manufacturer: 'DNP',
            warranty: '2 yars./ or 100 000 copy'
          }
        }, 
        // DS820
        {
          name: 'DNP Printer DS820',
          path: 'DS820',
          title: 'DNP DS820',
          reference: '212820',
          condition: 'Nov proizvod',
          conditionPlus:"Nudeći dva tipa potrošnog materijala i zadovoljavajući zahteve proširenog izbora formata fotografija do 8x32'' panorama (* preko SDK), ovaj vrhunski štampač daje odličan kvalitet fotografiji koji savršeno odgovara profesionalnoj fotografiji i fotografiji događaja.",
          info: {
            generalFeatures: '',
            printModes: '',
            printMethod: '',
            printResolution: '',
            printSizes:'',
            dimensionsWeight: '',
            dimensionsWxDxH: '',
            withoutPaperorRibbon: '',
            other:'',
            printFinish: '',
            frontLoading: '',
            computerInterface:'',
            driverSoftware: '',
            powerSupplyVoltage: '',
            manufacturer: '',
            warranty: ''
          }
    
        }, 
        // RX1HS
        {
          name: 'DNP Printer RX1HS',
          path: 'RX1HS',
          title: 'DNP DS-RX1HS',
          reference: '123456',
          condition: 'Nov proizvod',
          conditionPlus: 'Povećane brzine štampanja ovog RX1HS štampača omogućavaju Vam da napravite 290 slika 4x6” (10x15cm) na sat u poređenju sa 249 slika na RX1 štampaču. Na primer, fotografija 4x6” bi se štampala za 15 sekundi sa RX1, dok bi za RX1HS trebalo samo 12,4s. Moguće je smanjiti za 5 sekundi vreme štampanja fotografije veličine 6x8”(15x20cm).'
          
        },
        // QW410
        {
          name: 'DNP Printer QW410',
          path: 'QW410',
          title: 'DNP QW410',
          reference: '212410',
          condition: 'Nov proizvod',
          conditionPlus: 'Štampač QW410 je najkompaktniji, najlakši i prvi 4,5-inčni model u DNP-ovoj liniji štampača. Mogućnost rada sa eksternom baterijom čini ga prenosivim. Jednostavan za rukovanje i transport, ovaj novi, lako prenosivi, štampač koji štedi prostor posebno je atraktivan za integratore sistema, za male događaje, za štampanje ID fotografija. Lako ugradiv u kabine za selfije i kioske. Male veličine, veliki po karakteristikama!',
          info: {
            generalFeatures: 'The QW410 printer is the most compact, lightest and first 4.5-inch model in DNP’s printer lineup. Offering the possibility to work with an external battery.',
            photoSize:[
              '10х15 cm, speed: 18.8 sek.','11х20 cm, speed: 23.1 sek.'
            ],
            consumables:[
              'QW410 10x15 cm.PD - 150 prints/roll - 2 rolls/box - 212424','QW410 10x15 cm.SD - 150 prints/roll - 2 rolls/box - 212414','QW410 11x20 cm. ( 4.5x8") PD - 110 prints/roll - 2 rolls/box','QW410 11x20 cm. ( 4.5x8") SD - 110 prints/roll - 2 rolls/box'
            ],
            printTrendySizes:[
              '10 х 15 cm - 4х6"','11 х 20 cm - 4.5х8"'
            ],
            squareSize:[
              '10 х 10 cm. - 4х4"','11 х 11 cm. - 4.5х4.5"','5 х 10 cm - 2х4"','5 х 11 cm - 2х4.5"'
            ],
            resolution: '300х300 dpi',
            computerInterface:'USB 2.0',
            dimensionsWxDxH: '208х198х240мм',
            approxWeight: '5.8kg',
            warranty: '1 year or 10,000 prints, whichever comes first'
          }
        },
        // DS40
        {
          name: 'DNP Printer DS40',
          path: 'DS40',
          reference: '212040',
          condition: 'Nov proizvod',
          conditionPlus: 'Poželjan foto štampač vodećih sistem integratora i profesionalnih fotografa.',
          title: 'DNP DS40',
          info: {
            printMethod: 'Dye Sublimation Thermal Transfer',
            printModes: 'High Speed, High Quality',
            printResolution: '300x300dpi, 300x600dpi',
            printSizes:[
              '2x6 (1*) - 50.5x152 mm','PC - 101x152mm','2L - 127x178 mm','A5 - 152x203 mm','A5W - 152x229 mm'
            ],
            printNumbers:[
              'PC - 400 sheets','2L - 230 sheets','A5 - 200 sheets','A5W - 2x180 sheets'
            ],
            printSpeed:[
             'PC - 8,9 sec./sheet - 11,7 sec./sheet','PC 2-up (2*) - 7,4 sec./sheet - 10 sec./sheet','2L - 12,8 sec./sheet - 17,4 sec./sheet','A5 - 13,9 sec./sheet - 19,3 sec./sheet','A5W - 16,4 sec./sheet - 22,4 sec./sheet'
            ],
            ribbonFinish: 'YMC + overcoat',
            computerInterface:'USB 2.0 (Max. 480 Mbps)',
            bufferSize: 'For two images (3*)',
            driverSoftware:'Windows 2000 / XP / VISTA / 7 / 8 - MAC OS 10.6 - 10.8',
            externalDimension: '322Wx366Dx170H',
            approxWeight:'Env. 14kg',
            powerSupplyVoltage: '100V~240V CA 50/60 Hz',
            powerConsumption:'100V 3.96A 240V 1.69A',
            accessories: 'EU power supply cord',
            options:[
              'Paper tray (L and PC)','Paper spacer (L or PC)'
            ],
            productCode: '202 842',
            commodityCode:'844332109000 J'
          }
    
        }
      ]
    },
    
    // Media
    media: {
      title: 'Media',
      list: [
        // {
        //   name: ['DS620 10X15CM', '(4X6")'],
        //   path: 'ds620-10x15cm(4x6)',
        //   image: 'DS6204X6.jpg',
        //   size: '10x15cm  4"x 6"',
        //   printsPerRoll: '400',
        //   rollsPerCase: '2',
        //   totalPrints: '800'
        // },
        {
          name: ['DS620 13X18CM', '(5X7")'],
          path: 'ds620-13x18cm(5x7)',
          image: 'DS6205X7.jpg',
          reference: '212627',
          size: '13x18cm  5"x 7"',
          printsPerRoll: '230',
          rollsPerCase: '2',
          totalPrints: '460'
        },
        {
          name: ['DS620 15X20CM', '(6X8")'],
          path: 'ds620-15x20cm(6x8)',
          image: 'DS6206X8.jpg',
          reference: '212628',
          size: '15x20cm  6"x 8"',
          printsPerRoll: '200',
          rollsPerCase: '2',
          totalPrints: '400'
        },
        {
          name: ['DS620 15X20CM', '(6X8")LX METALLIC'],
          path: 'ds620-15x20cm(6x8)-lx-metallic',
          image: 'Metallic_media_6x8.jpg',
          reference: '212926',
          size: '15x20cm  6"x 8"',
          printsPerRoll: '200',
          rollsPerCase: '1',
          totalPrints: '200'
        },
        // {
        //   name: ['DS620 15X23CM', '(6X9")'],
        //   path: 'ds620-15x23cm(6x9)',
        //   image: 'DS6206X9.jpg',
        //   size: '15x20cm  6"x 9"',
        //   printsPerRoll: '180',
        //   rollsPerCase: '2',
        //   totalPrints: '360'
        // },
        {
          name: ['DS820 20X25CM', '(8X10")PP'],
          path: 'ds820-20x25cm(8x10)-pp',
          image: 'DS8208x10PP_Large.jpg',
          reference: '212821',
          size: '20x25cm  8"x 10"',
          printsPerRoll: '130',
          rollsPerCase: '2',
          totalPrints: '260'
        },
        {
          name: ['DS820 20X25CM', '(8X10")SD'],
          path: 'ds820-20x25cm(8x10)-sd',
          image: 'DS8208x10PP_Large.jpg',
          reference: '212824',
          size: '20x25cm  8"x 10"',
          printsPerRoll: '130',
          rollsPerCase: '2',
          totalPrints: '260'
        },
        {
          name: ['DS820 20X30CM', '(8X12")LX METALLIC'],
          path: 'ds820-20x30cm(8x12)-lx-metallic',
          image: 'DS820(8x12)LX_Metallic.jpg',
          reference: '212922',
          size: '20x30cm  8"x 12"',
          printsPerRoll: '110',
          rollsPerCase: '1',
          totalPrints: '110'
        },
        {
          name: ['DS820 20X30CM', '(8X12")PP'],
          path: 'ds820-20x30cm(8x12)-pp',
          image: 'DS8208x12PP_Large.jpg',
          reference: '212822',
          size: '20x30cm  8"x 12"',
          printsPerRoll: '110',
          rollsPerCase: '2',
          totalPrints: '220'
        },
        {
          name: ['DS820 20X30CM', '(8X12")SD'],
          path: 'ds820-20x30cm(8x12)-sd',
          image: 'DS8208x12SD_Large.jpg',
          reference: '212825',
          size: '20x30cm  8"x 12"',
          printsPerRoll: '110',
          rollsPerCase: '2',
          totalPrints: '220'
        },
        {
          name: ['DS820 A4 PP', ''],
          path: 'ds820-a4-pp',
          image: 'DS820A4PP_Large.jpg',
          reference: '212823',
          size: 'A4"',
          printsPerRoll: '110',
          rollsPerCase: '2',
          totalPrints: '220'
        },
        {
          name: ['DS820 A4 SD', ''],
          path: 'ds820-a4-sd',
          image: 'DS820A4SD_Large.jpg',
          reference: '212826',
          size: 'A4"',
          printsPerRoll: '110',
          rollsPerCase: '2',
          totalPrints: '220'
        },
        {
          name: ['RX1HS 10X15CM', '(4x6)'],
          path: 'rx1hs-10x15cm-(4x6)',
          image: 'RX1HS4X6_PM_E_Large.jpg',
          reference: '102114',
          size: '10x15cm  4"x 6"',
          printsPerRoll: '700',
          rollsPerCase: '2',
          totalPrints: '1400'
        },
        {
          name: ['RX1HS 13X18CM', '(5x7)'],
          path: 'rx1hs-13x18cm-(5x7)',
          image: 'RX1HS5x7400.jpg',
          reference: '102122',
          size: '13x18cm  5"x 7"',
          printsPerRoll: '400',
          rollsPerCase: '2',
          totalPrints: '800'
        },
        {
          name: ['RX1HS 15X20CM', '(6x8)'],
          path: 'rx1hs-15x20cm-(6x8)',
          image: 'RX1HS6X8_PM_E_Large.jpg',
          reference: '102115',
          size: '15x20cm  6"x 8"',
          printsPerRoll: '350',
          rollsPerCase: '2',
          totalPrints: '700'
        },
        {
          name: ['DS40 10X15CM', '(4x6)'],
          path: 'ds40-10x15cm-(4x6)',
          image: 'DS_40_4x6.jpg',
          reference: '202943',
          size: '10x15cm  4"x 6"',
          printsPerRoll: '400',
          rollsPerCase: '2',
          totalPrints: '800'
        },
        {
          name: ['DS40 13X18CM', '(5x7)'],
          path: 'ds40-13x18cm-(5x7)',
          image: 'DS_40_5x7.jpg',
          reference: '202958',
          size: '13x18cm  5"x 7"',
          printsPerRoll: '230',
          rollsPerCase: '2',
          totalPrints: '460'
        },
        {
          name: ['DS40 15X20CM', '(6x8)'],
          path: 'ds40-15x20cm-(6x8)',
          image: 'DS40_6x8v2.png',
          reference: '202953',
          size: '15x20cm  6"x 8"',
          printsPerRoll: '200',
          rollsPerCase: '2',
          totalPrints: '400'
        },
        // {
        //   name: ['DS40 15X23CM', '(6x9)'],
        //   path: 'ds40-15x23cm-(6x9)',
        //   image: 'DS40_6x9v2.png',
        //   size: '15x23cm  6"x 9"',
        //   printsPerRoll: '180',
        //   rollsPerCase: '2',
        //   totalPrints: '360'
        // },
        {
          name: ['QW410 10X15CM', '(4X6") PD'],
          path: 'qW410-10x15cm-(4X6)-pd',
          image: 'QW4104x6PD.jpg',
          reference: '212424',
          size: '10x15cm 4x6"',
          printsPerRoll: '150',
          rollsPerCase: '2',
          totalPrints: '300'
        },
        {
          name: ['QW410 10X15CM', '(4X6") SD'],
          path: 'qW410-10x15cm-(4X6)-sd',
          image: 'QW4104x6SD.jpg',
          reference: '212414',
          size: '10x15cm 4x6"',
          printsPerRoll: '150',
          rollsPerCase: '2',
          totalPrints: '300'
        },
        // {
        //   name: ['QW410 11X20CM', '(4.5X8") PD'],
        //   path: 'qW410-11x20cm-(4.5X8)-pd',
        //   image: 'QW4104x6SD.jpg',
        //   size: '10x15cm 4x6"',
        //   printsPerRoll: '110',
        //   rollsPerCase: '2',
        //   totalPrints: '220'
        // },
        // {
        //   name: ['QW410 11X20CM', '(4.5X8") SD'],
        //   path: 'qW410-11x20cm-(4.5X8)-sd',
        //   image: 'QW4104.5x8SD.jpg',
        //   size: '10x15cm 4x6"',
        //   printsPerRoll: '110',
        //   rollsPerCase: '2',
        //   totalPrints: '220'
        // }
      ]
    },

    // Accessories
    accessories:{
      title: "Pribor",
      list: [
        {
          name: ['Kaseta za ribon', 'za printer DS620'],
          path: 'ribbon-cassete-ds620',
          image: '89-thickbox_default.jpg',
          reference: '212623',
          condition: 'Nov proizvod',
          info: 'Kaseta za ribon za printer DS620'
        },
        {
          name: ['Držač papira 10х15сm', 'za printer DS620 '],
          path: 'paper-tray-dnp-ds620-10х15сm',
          image: '90-thickbox_default.jpg',
          reference: '23208790S',
          condition: 'Nov proizvod',
          info: 'Držač papira za DNP DS620'
        },
        {
          name: ['DS620 Držač rolne 1', 'Duži/Levi'],
          path: 'ds620-roll-holder-1-(long/left)',
          image: '91-thickbox_default.jpg',
          reference: '23208760S',
          condition: 'Nov proizvod',
          info: 'DS620  Držač rolne 1 (Duži/Levi)'
        },
        {
          name: ['DS620  Držač rolne 2', 'Kraći/Desni'],
          path: 'ds620-roll-holder-2-short/right',
          image: '92-thickbox_default.jpg',
          reference: '23208770S',
          condition: 'Nov proizvod',
          info: 'DS620  Držač rolne 2 (Kraći/Desni)'
        }
      ]
    }
  }
}

const i18n = new VueI18n({
  locale: "srb",
  messages,
});

new Vue({
  created() {
    AOS.init();
  },
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
