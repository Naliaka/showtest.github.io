var language = {
    fr: {
      appTitle: "Malaika",
      appdescrip: "Malaika Website",
      setflag: "Malaika/fr.svg",
      ldwnvideo: "Nos vidéos",
      topich1: "Talk-show chrétien",
      abouth1: "À propos de nous",
      aboutush1: "tout ce que tu as besoin de savoir",
      christTra: "Christianisme et traditions",
      christTrap: "Aujourd’hui, un problème important dans notre société est de savoir comment adapter les croyances africaines traditionnelles qui ne sont pas conformes au message du Christ.",
      christmag: "Programme télévisé Christian Magazine",
      christmagp: "Malaika est une plate-forme de talk-show chrétienne où les sujets sur le christianisme et les traditions africaines sont discutés avec un accent sur les femmes dans notre société",
      christwatch: "Regarder la dernière",
      christvideo: "Vidéo",
      christverse: "Ne croyez pas que je sois venu pour abolir la loi et les prophètes; Je ne suis pas venu pour les abolir, mais pour les accomplir.", 
      christintro: "Nous organisons des spectacles chrétiens interactifs",
      christourvid: "Nos vidéos",
      chrismrg: "lemariage",
      christradions: "latradition",
      christrg: "latradition",
      itime: "Chaque mardi à 15h30 (GMT + 4) sur Youtube",
      playvid: "Ver video",
      vidURL1: "https://www.youtube.com/watch?v=aFaNSzWpd0U",
      vidURL2: "https://www.youtube.com/embed/aFaNSzWpd0U?rel=0&amp;enablejsapi=1",
      donatebtn: "¡Dona al proyecto!",
      donateh1: "¡Ayude a mantener este proyecto gratis!",
      donateh2: "Reduzca el tiempo de desarrollo ayudando a nuestros desarrolladores.",
      chriswdg: "Les mariages",
      tradions: "latradition",
      polytradions: "Traditions-Polygamie",
      HowWeWork: "Comment nous travaillons",
      Working: "Travailler ensemble pour obtenir d'excellents résultats",
      Research: "Recherche, analyse et Planification",
      Researchp: "Nous commençons par mener des recherches pour comprendre et trouver des moyens d’atteindre les communautés afin d’identifier les problèmes à traiter et de procéder à une analyse conformément à l’Évangile du Christ.Nous commençons par des recherches pour comprendre les moyens de joindre les communautés afin d’identifier les problèmes à traiter, faire l'analyse conformément à l'évangile du christ.",
      Contact: "Contact & amp; Les visites",
      Contactp: "À partir des résultats de la recherche, de l'analyse et de la planification, et en fonction des ressources disponibles, nous envoyons des contacts et des visites, sur invitation et sur demande. À partir des résultats de la recherche, de l'analyse et de la planification, et en fonction des ressources disponibles, nous envoyons des contacts et des visites. , par le biais d'invitations et de demandes.",
      christdonate: "\"Êtes-vous enthousiasmé par l'impact de la malaika sur notre société?\"",
      buttondonate: "Faites un don aujourd'hui",
      weekverse: "\"Écritures\"",
      BIBLEverse: "29 que vous vous absteniez de ce qui a été sacrifié aux idoles et au sang, de ce qui est étranglé et de ce qu’il n’y a pas de chasteté. Si vous vous en abstenez, vous ferez bien. Adieu.",
      verse: "Actes 15: 28-29",
      comverse: "Biblia.com",
      blogverse: "du blog",
      Articlesverse: "Super articles du blog",
      julyverse: "juillet",
      Febverse: "février",
      Febverse: "Hecho con <span class=\"fa fa-heart\" style=\"col or: #f66;\"></span> y <span class=\"fa fa-coffee\" style=\"color: #52bab3;\"></span> por <a href=\"http://michaelsboost.github.io/\" target=\"_blank\">Michael</a> y otros.",
      "discontinued": "A partir del 13 de abril de 2018, WebDGap ya no es un proyecto activo.<br>Todas las actualizaciones a partir de esa fecha y en adelante son implementaciones basadas exclusivamente en colaboradores."
    }
  };
  
  
  if (window.location.hash) {
    if (location.hash.substring(1) === "en") {
      // remove all hash tags and reload page to default text
      window.location.href = window.location.toString().split(/\?|#/)[0];
    }
    else if (location.hash.substring(1) === "fr") {
      $("[data-language=setflag]").attr('src', language.fr.setflag);
      document.title = language.es.appTitle;
      $("meta[name-description]").attr('content', language.es.appdescrip);
      $("[data-language=ldwnvideo]").text(language.fr.ldwnvideo);
      $("[data-language=topich1]").text(language.fr.topich1);
      $("[data-language=abouth1]").text(language.fr.abouth1);
      $("[data-language=aboutush1]").text(language.fr.aboutush1);
      $("[data-language=christTra]").text(language.fr.christTra);
      $("[data-language=itime]").text(language.fr.itime);
      $("[data-language=playvid]").text(language.fr.playvid);
      $("[data-language=tradions]").text(language.fr.tradions);
      $("[data-language=polytradions]").text(language.fr.polytradions);
      $("[data-language=HowWeWork]").text(language.fr.HowWeWork);
      $("[data-language=Working]").text(language.fr.Working);
      $("[data-language=Research]").text(language.fr.Research);
      $("[data-language=Researchp]").text(language.fr.Researchp);
      $("[data-language=contact]").text(language.fr.contact);
      $("[data-language=Contactp]").text(language.fr.Contactp);
      $("[data-language=christdonate]").text(language.fr.christdonate);
      $("[data-language=buttondonate]").text(language.fr.buttondonate);
      $("[data-language=weekverse]").text(language.fr.weekverse);
      $("[data-language=playvid]").text(language.fr.playvid);
      window.onload = function() {
        $("[data-language=vidURL2]").attr('src', language.fr.vidURL2);
        $("[data-language=vidURL1]").attr('href', language.fr.vidURL1);
      };
      $("[data-language=BIBLEverse]").text(language.fr.BIBLEverse);
      $("[data-language=verse]").text(language.fr.verse);
      $("[data-language=comverse]").text(language.fr.comverse);
      $("[data-language= blogverse]").text(language.fr. blogverse);
      $("[data-language=Articlesverse]").text(language.fr.Articlesverse);
      $("[data-language=julyverse]").text(language.fr.julyverse);
      $("[data-language= Febverse]").text(language.fr. Febverse);
      $("[data-language=openapptsub]").text(language.fr.openapptsub);
      $("[data-language=apptdescr]").text(language.fr.apptdescr);
      $("[data-language=revh1]").text(language.fr.revh1);
      $("[data-language=revh2]").text(language.fr.revh2);
      $("[data-language=rev1]").text(language.fr.rev1);
      $("[data-language=rev2]").text(language.fr.rev2);
      $("[data-language=rev3]").text(language.fr.rev3);
      $("[data-language=userbio]").text(language.fr.userbio);
      $("[data-language=madewwebdgap]").text(language.fr.madewwebdgap);
      $("[data-language=submitapp]").text(language.fr.submitapp);
      $("[data-language=madeby]").html(language.fr.madeby);
      $("[data-language=discontinued]").html(language.fr.discontinued);
    }
  }
  
  $('[data-callLang]').on('click', function() {
    //change flag to selected language
    $("[data-language=setflag]").attr('src', $(this).find('img').attr('src'));
    
    if ($(this).attr('data-callLang') === "en") {
      window.location.href = window.location.toString().split(/\?|#/)[0];
      return false;
    }
    
    window.location.hash = $(this).attr('data-callLang')
    location.reload(true);
  });
  