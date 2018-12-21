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
      rev1: "\"En primer lugar manos fuera a ustedes por su esfuerzo y agradable, super herramienta. Buen trabajo WebDGap equipo! Gran esfuerzo y experiencia super de interfaz de usuario. Increíblemente fácil! \"",
      rev1name: "Mark C.",
      rev2: "\"Es una aplicación muy sorprendente que me hace hacer aplicaciones de escritorio en 3 minutos (que por lo general se tarda más de 2 horas al menos de mí si lo hice desde cero). Espero tener una biblioteca muy grande y plugins para esta APP gracias de nuevo por tu bonita aplicación \"",
      rev2name: "Sarah Y.",
      rev3: "\"A primera vista, se ve como una buena herramienta innovadora. Me gusta el gran enfoque y el tiempo que se dio a la respuesta diseño claro. La aplicación me da más control sobre qué plataformas quiero exportar. Estaré usando esta herramienta para proyectos más serios. Saludos.\"",
      rev3name: "Jon E.",
      userbio: "Usuario",
      madewwebdgap: "Hecho con WebDGap",
      submitapp: "¡Presente el suyo hoy!",
      madeby: "Hecho con <span class=\"fa fa-heart\" style=\"col or: #f66;\"></span> y <span class=\"fa fa-coffee\" style=\"color: #52bab3;\"></span> por <a href=\"http://michaelsboost.github.io/\" target=\"_blank\">Michael</a> y otros.",
      "discontinued": "A partir del 13 de abril de 2018, WebDGap ya no es un proyecto activo.<br>Todas las actualizaciones a partir de esa fecha y en adelante son implementaciones basadas exclusivamente en colaboradores."
    }
  };
  
  
  if (window.location.hash) {
    if (location.hash.substring(1) === "eng") {
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
      $("[data-language=lrun]").text(language.fr.lrun);
      $("[data-language=lrun]").attr("href", "app/" + location.hash);
      $("[data-language=intro]").text(language.fr.intro);
      $("[data-language=playvid]").text(language.fr.playvid);
      window.onload = function() {
        $("[data-language=vidURL2]").attr('src', language.fr.vidURL2);
        $("[data-language=vidURL1]").attr('href', language.fr.vidURL1);
      };
      $("[data-language=donatebtn]").text(language.fr.donatebtn);
      $("[data-language=donateh1]").text(language.fr.donateh1);
      $("[data-language=donateh2]").text(language.fr.donateh2);
      $("[data-language=appshirt]").text(language.fr.appshirt);
      $("[data-language=wapptsub]").text(language.fr.wapptsub);
      $("[data-language=bapptsub]").text(language.fr.bapptsub);
      $("[data-language=openappt]").text(language.fr.openappt);
      $("[data-language=openapptsub]").text(language.fr.openapptsub);
      $("[data-language=apptdescr]").text(language.fr.apptdescr);
      $("[data-language=buybtn]").text(language.fr.buybtn);
      $("[data-language=revh1]").text(language.fr.revh1);
      $("[data-language=revh2]").text(language.es.revh2);
      $("[data-language=rev1]").text(language.es.rev1);
      $("[data-language=rev2]").text(language.es.rev2);
      $("[data-language=rev3]").text(language.es.rev3);
      $("[data-language=userbio]").text(language.es.userbio);
      $("[data-language=madewwebdgap]").text(language.es.madewwebdgap);
      $("[data-language=submitapp]").text(language.es.submitapp);
      $("[data-language=madeby]").html(language.es.madeby);
      $("[data-language=discontinued]").html(language.es.discontinued);
    }
  }
  
  $('[data-callLang]').on('click', function() {
    //change flag to selected language
    $("[data-language=setflag]").attr('src', $(this).find('img').attr('src'));
    
    if ($(this).attr('data-callLang') === "eng") {
      window.location.href = window.location.toString().split(/\?|#/)[0];
      return false;
    }
    
    window.location.hash = $(this).attr('data-callLang')
    location.reload(true);
  });
  