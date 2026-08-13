function initializeLesson5Lab() {
  "use strict";

  const clients = {
    bakery: {
      name:"Whisk & Willow Bakery",
      tagline:"Baked Warm. Shared Happy.",
      icon:"🧁",
      category:"Bakery",
      headers:[
        "https://drive.google.com/thumbnail?id=181XeKHIrBSCtz-Nk1-Eg5fOmxOavbQt-&sz=w2000",
        "https://drive.google.com/thumbnail?id=1ZoLhtp1d5aSy44CQru6uekGAXYyEDo8V&sz=w2000"
      ],
      mission:"Create handmade baked goods that make everyday moments feel warmer, happier, and worth sharing.",
      customer:"Families, students, neighbors, and anyone looking for a welcoming local treat.",
      problem:"Busy people want fresh, comforting baked goods without losing the friendly feeling of a neighborhood bakery.",
      colors:["#8B4D32","#C38863","#F3B9A3","#F8E8D6"],
      personality:["Warm","Welcoming","Handmade","Cheerful"],
      fonts:[
        {name:"Georgia", sample:"Warm & Handmade", stack:"Georgia, serif"},
        {name:"Arial", sample:"Fresh Every Day", stack:"Arial, sans-serif"}
      ],
      imagery:["Fresh pastries","Warm bakery light","Handmade treats","Friendly gathering"],
      notes:[
        {title:"Different",text:"Handmade treats with a warm neighborhood feel."},
        {title:"Customers Should Feel",text:"Comfortable, welcomed, and excited for something fresh."},
        {title:"Known For",text:"Warm service, fresh baking, and shareable treats."}
      ],
      starter:`<!DOCTYPE html>
<html>
<head>
  <style>
    /* 60% COMPLETE - FINISH THE FINAL 40% */

    nav {
      background-color: #8B4D32;
      color: white;
      text-align: center;
      font-weight: bold;
    }

    /* JOB 2: Add at least 2 valid styles to the main heading */
    h1 {
      font-family: Georgia;
      text-align: center;

    }

    /* JOB 5: Add 2 text-focused styles: color, size, font, alignment, or boldness */
    h2 {

    }

    p {
      font-family: Arial;
      color: #8B4D32;
      text-align: center;
    }

    ul {
      font-family: Arial;
      color: #8B4D32;
      text-align: left;
    }

    /* JOB 3: Add a background-color to the featured content area */
    div {
      text-align: center;

    }

    /* JOB 4: Add background-color plus at least 1 more valid style */
    button {
      color: white;
      font-weight: bold;

    }
  </style>
</head>

<body>

  <nav>
    Home | Menu | About | Contact
  </nav>

  <!-- JOB 1: Create a div below -->
  <!-- Then add the header image that best matches the Identity Board -->


  <h1>Whisk & Willow Bakery</h1>

  <p>Baked Warm. Shared Happy.</p>

  <h2>Fresh From the Oven</h2>

  <div>
    <p>
      We make fresh cookies, cupcakes, breads, and seasonal treats
      for families and neighbors who want something special to share.
    </p>
  </div>

  <h2>Today's Favorites</h2>

  <ul>
    <li>Chocolate Chip Cookies</li>
    <li>Vanilla Berry Cupcakes</li>
    <li>Cinnamon Swirl Bread</li>
  </ul>

  <button>View Our Menu</button>

</body>
</html>`
    },

    tech: {
      name:"NovaByte Labs",
      tagline:"Simple Tech. Smarter Work.",
      icon:"💻",
      category:"Technology",
      headers:[
        "https://drive.google.com/thumbnail?id=1utI800p8vXzKnRhkdvmngXqUuvWN4qUN&sz=w2000",
        "https://drive.google.com/thumbnail?id=1Ozi_QopRZbpZ0ediGdF0CWxkLxm4oqNS&sz=w2000"
      ],
      mission:"Build clear, useful digital tools that help small businesses work faster and stay organized.",
      customer:"Small business owners and teams that need technology without unnecessary complexity.",
      problem:"Many small businesses waste time using confusing tools that are harder than the work they are supposed to simplify.",
      colors:["#15263D","#1F5D8F","#4AA8D8","#DCEFF8"],
      personality:["Modern","Smart","Clean","Dependable"],
      fonts:[
        {name:"Trebuchet", sample:"Modern + Clear", stack:"Trebuchet MS, sans-serif"},
        {name:"Arial", sample:"Simple Technology", stack:"Arial, sans-serif"}
      ],
      imagery:["Clean screens","Digital connections","Modern workspace","Simple technology"],
      notes:[
        {title:"Different",text:"Technology designed to feel understandable instead of overwhelming."},
        {title:"Customers Should Feel",text:"Confident, organized, and ready to work smarter."},
        {title:"Known For",text:"Clean tools, simple solutions, and dependable support."}
      ],
      starter:`<!DOCTYPE html>
<html>
<head>
  <style>
    /* 60% COMPLETE - FINISH THE FINAL 40% */

    nav {
      background-color: #15263D;
      color: white;
      text-align: center;
      font-weight: bold;
    }

    /* JOB 2: Add at least 2 valid styles to the main heading */
    h1 {
      font-family: Trebuchet MS;
      text-align: center;

    }

    /* JOB 5: Add 2 text-focused styles: color, size, font, alignment, or boldness */
    h2 {

    }

    p {
      font-family: Arial;
      color: #15263D;
      text-align: center;
    }

    ul {
      font-family: Arial;
      color: #15263D;
      text-align: left;
    }

    /* JOB 3: Add a background-color to the featured content area */
    div {
      text-align: center;

    }

    /* JOB 4: Add background-color plus at least 1 more valid style */
    button {
      color: white;
      font-weight: bold;

    }
  </style>
</head>

<body>

  <nav>
    Home | Solutions | About | Contact
  </nav>

  <!-- JOB 1: Create a div below -->
  <!-- Then add the header image that best matches the Identity Board -->


  <h1>NovaByte Labs</h1>

  <p>Simple Tech. Smarter Work.</p>

  <h2>Technology Without the Confusion</h2>

  <div>
    <p>
      We build simple digital tools that help small businesses
      organize projects, communicate clearly, and save time.
    </p>
  </div>

  <h2>What We Build</h2>

  <ul>
    <li>Team Dashboards</li>
    <li>Scheduling Tools</li>
    <li>Simple Business Apps</li>
  </ul>

  <button>Explore Our Solutions</button>

</body>
</html>`
    },

    sports: {
      name:"PeakPulse Athletics",
      tagline:"Train Strong. Rise Higher.",
      icon:"🏅",
      category:"Sports",
      headers:[
        "https://drive.google.com/thumbnail?id=1d96BAzfBemV2LhO-hvG1WFmuny-XG0HS&sz=w2000",
        "https://drive.google.com/thumbnail?id=17ltdrlHhhxRqp05uqXA6VplC5cKJH8s8&sz=w2000"
      ],
      mission:"Help young athletes build strength, confidence, and better habits through focused sports training.",
      customer:"Young athletes and families looking for structured training that improves performance and confidence.",
      problem:"Athletes often want to improve but do not always know how to train with a clear plan and consistent support.",
      colors:["#1E2430","#B7262E","#E85C2A","#F3D24E"],
      personality:["Bold","Focused","Competitive","Motivating"],
      fonts:[
        {name:"Trebuchet", sample:"Train Strong", stack:"Trebuchet MS, sans-serif"},
        {name:"Arial", sample:"Rise Higher", stack:"Arial, sans-serif"}
      ],
      imagery:["Athletes in motion","Training energy","Competition","Strength + focus"],
      notes:[
        {title:"Different",text:"Training built around confidence, consistency, and real athletic progress."},
        {title:"Customers Should Feel",text:"Motivated, focused, and ready to improve."},
        {title:"Known For",text:"High-energy coaching, strong habits, and athlete development."}
      ],
      starter:`<!DOCTYPE html>
<html>
<head>
  <style>
    /* 60% COMPLETE - FINISH THE FINAL 40% */

    nav {
      background-color: #1E2430;
      color: white;
      text-align: center;
      font-weight: bold;
    }

    /* JOB 2: Add at least 2 valid styles to the main heading */
    h1 {
      font-family: Trebuchet MS;
      text-align: center;

    }

    /* JOB 5: Add 2 text-focused styles: color, size, font, alignment, or boldness */
    h2 {

    }

    p {
      font-family: Arial;
      color: #1E2430;
      text-align: center;
    }

    ul {
      font-family: Arial;
      color: #1E2430;
      text-align: left;
    }

    /* JOB 3: Add a background-color to the featured content area */
    div {
      text-align: center;

    }

    /* JOB 4: Add background-color plus at least 1 more valid style */
    button {
      color: white;
      font-weight: bold;

    }
  </style>
</head>

<body>

  <nav>
    Home | Training | Coaches | Contact
  </nav>

  <!-- JOB 1: Create a div below -->
  <!-- Then add the header image that best matches the Identity Board -->


  <h1>PeakPulse Athletics</h1>

  <p>Train Strong. Rise Higher.</p>

  <h2>Build Your Next Level</h2>

  <div>
    <p>
      We help young athletes train with purpose, build confidence,
      and develop stronger habits for sports and competition.
    </p>
  </div>

  <h2>Training Programs</h2>

  <ul>
    <li>Speed & Agility</li>
    <li>Strength Training</li>
    <li>Performance Coaching</li>
  </ul>

  <button>Start Training</button>

</body>
</html>`
    }
  };

  const introScreen = document.getElementById("introScreen");
  const workspace = document.getElementById("workspace");
  const codeEditor = document.getElementById("codeEditor");
  const lineNumbers = document.getElementById("lineNumbers");
  const syntaxLayer = document.getElementById("syntaxLayer");
  const previewFrame = document.getElementById("previewFrame");
  const formatCodeBtn = document.getElementById("formatCodeBtn");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const darkModeState = document.getElementById("darkModeState");
  const howToBtn = document.getElementById("howToBtn");
  const howToModal = document.getElementById("howToModal");
  const howToClose = document.getElementById("howToClose");
  const progressFill = document.getElementById("progressFill");
  const progressNumber = document.getElementById("progressNumber");
  const progressMessage = document.getElementById("progressMessage");
  const jobStatusGrid = document.getElementById("jobStatusGrid");
  const celebrationLayer = document.getElementById("celebrationLayer");
  const completionModal = document.getElementById("completionModal");
  const completionClose = document.getElementById("completionClose");
  const completionContinue = document.getElementById("completionContinue");
  const reactionModal = document.getElementById("reactionModal");
  const reactionImage = document.getElementById("reactionImage");
  const reactionKicker = document.getElementById("reactionKicker");
  const reactionTitle = document.getElementById("reactionTitle");
  const reactionMessage = document.getElementById("reactionMessage");
  const reactionClose = document.getElementById("reactionClose");
  const reactionContinue = document.getElementById("reactionContinue");
  const reactionBoard = document.getElementById("reactionBoard");

  const clientIcon = document.getElementById("clientIcon");
  const clientName = document.getElementById("clientName");
  const clientTagline = document.getElementById("clientTagline");

  const viewBoardBtn = document.getElementById("viewBoardBtn");
  const viewResourcesBtn = document.getElementById("viewResourcesBtn");
  const resetBtn = document.getElementById("resetBtn");
  const switchBtn = document.getElementById("switchBtn");

  const boardModal = document.getElementById("boardModal");
  const resourcesModal = document.getElementById("resourcesModal");

  let activeKey = null;
  let updateTimer = null;

  const HAPPY_CLIENT = "https://drive.google.com/thumbnail?id=1RPQ4xVgcjl-bqlYoCZcg7F9P4TxITBsy&sz=w2000";
  const SAD_CLIENT = "https://drive.google.com/thumbnail?id=1R0BarmaMp84QT2F3f6SIGKcM08FuBsTD&sz=w2000";

  let reactionTimer = null;
  let reactionSeen = new Set();
  let starterColorDeclarations = new Set();
  let starterRuleDeclarations = {};
  let completionShown = false;

  function clientPalette(client){
    return (client.colors || []).map(c => String(c).trim().toLowerCase());
  }

  function normalizeColor(value){
    const v = String(value || "").trim().toLowerCase().replace(/\s+/g,"");
    const probe = document.createElement("span");
    probe.style.color = "";
    probe.style.color = v;
    if(!probe.style.color) return v;
    document.body.appendChild(probe);
    const rgb = getComputedStyle(probe).color.replace(/\s+/g,"");
    probe.remove();
    return [v, rgb];
  }

  function colorMatchesBoard(value, client){
    const candidates = normalizeColor(value);
    const vals = Array.isArray(candidates) ? candidates : [candidates];
    return clientPalette(client).some(boardColor => {
      const boardVals = normalizeColor(boardColor);
      const arr = Array.isArray(boardVals) ? boardVals : [boardVals];
      return vals.some(v => arr.includes(v));
    });
  }

  function showClientReaction(type, title, message, allowBoard=false){
    reactionModal.classList.remove("happy","concern","open");
    reactionImage.src = type === "happy" ? HAPPY_CLIENT : SAD_CLIENT;
    reactionKicker.textContent = type === "happy" ? "CLIENT REACTION" : "PURPOSE CHECK";
    reactionTitle.textContent = title;
    reactionMessage.textContent = message;
    reactionBoard.classList.toggle("hidden", !allowBoard);
    reactionModal.classList.add(type === "happy" ? "happy" : "concern");
    reactionModal.getBoundingClientRect();
    reactionModal.classList.add("open");
    reactionModal.setAttribute("aria-hidden","false");
  }

  function closeClientReaction(){
    reactionModal.classList.remove("open","happy","concern");
    reactionModal.setAttribute("aria-hidden","true");
  }

  function extractColorDeclarations(source){
    const found = [];
    const colorRegex = /(color|background-color)\s*:\s*([^;{}]+)\s*;/gi;
    let match;
    while((match = colorRegex.exec(source))){
      found.push({
        property: match[1].toLowerCase(),
        value: match[2].trim(),
        full: match[0].replace(/\s+/g,"").toLowerCase()
      });
    }
    return found;
  }

  function getStyleText(source){
    const m = source.match(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/i);
    return m ? m[1] : "";
  }

  function parseSimpleRules(source){
    const css = getStyleText(source);
    const rules = {};
    const ruleRegex = /([^{}]+)\{([^{}]*)\}/g;
    let m;
    while((m = ruleRegex.exec(css))){
      const selector = m[1].replace(/\/\*[\s\S]*?\*\//g,"").trim();
      if(!selector) continue;

      const declarations = {};
      m[2].split(";").forEach(piece=>{
        const t = piece.trim();
        if(!t || !t.includes(":")) return;
        const colon = t.indexOf(":");
        const prop = t.slice(0,colon).trim().toLowerCase();
        const value = t.slice(colon+1).trim();
        if(prop && value && CSS.supports(prop,value)){
          declarations[prop] = value;
        }
      });
      rules[selector] = declarations;
    }
    return rules;
  }

  function newValidDeclarations(selector, source){
    const current = parseSimpleRules(source)[selector] || {};
    const starter = starterRuleDeclarations[selector] || {};
    const additions = {};

    Object.entries(current).forEach(([prop,value])=>{
      if(!(prop in starter) || starter[prop] !== value){
        additions[prop] = value;
      }
    });
    return additions;
  }

  function getJobCompletion(source){
    const jobs = [false,false,false,false,false];

    // Job 1: create a header div and place the client-approved header1.png inside it.
    const headerDiv = source.match(/<div\b[^>]*>\s*<img\b[^>]*\bsrc\s*=\s*["']header1\.png["'][^>]*>\s*<\/div>/i);
    jobs[0] = Boolean(headerDiv);

    const textStyleProperties = new Set([
      "color","font-size","font-family","text-align","font-weight"
    ]);

    // Job 2: at least 2 NEW text-focused h1 declarations.
    const h1Adds = newValidDeclarations("h1",source);
    jobs[1] = Object.keys(h1Adds).filter(prop => textStyleProperties.has(prop)).length >= 2;

    // Job 3: add background-color inline to the existing featured-content div.
    // This reinforces why inline styling is useful when only ONE div should change.
    const inlineDivMatches = [...source.matchAll(/<div\b([^>]*)>/gi)];
    jobs[2] = inlineDivMatches.some(match => {
      const attrs = match[1] || "";
      const styleMatch = attrs.match(/style\s*=\s*["']([^"']*)["']/i);
      if(!styleMatch) return false;
      return /(?:^|;)\s*background-color\s*:\s*[^;]+\s*;/i.test(styleMatch[1] + (styleMatch[1].trim().endsWith(";") ? "" : ";"));
    });

    // Job 4: button must gain background-color AND one additional valid style.
    const buttonAdds = newValidDeclarations("button",source);
    const buttonExtra = Object.keys(buttonAdds).filter(prop =>
      prop !== "background-color" && textStyleProperties.has(prop)
    );
    jobs[3] = Boolean(buttonAdds["background-color"]) && buttonExtra.length >= 1;

    // Job 5: at least 2 NEW text-focused h2 declarations.
    // background-color intentionally does NOT count here because it creates
    // a long isolated color bar behind the heading.
    const h2Adds = newValidDeclarations("h2",source);
    jobs[4] = Object.keys(h2Adds).filter(prop => textStyleProperties.has(prop)).length >= 2;

    return jobs;
  }

  function runCelebration(){
    celebrationLayer.innerHTML = "";
    celebrationLayer.classList.add("active");
    celebrationLayer.setAttribute("aria-hidden","false");

    const confettiColors = ["#0072BB","#F39200","#78B833","#FFD166","#EF476F","#7B61FF"];

    for(let i=0;i<70;i++){
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = Math.random()*100 + "vw";
      piece.style.background = confettiColors[Math.floor(Math.random()*confettiColors.length)];
      piece.style.setProperty("--fall-time",(2.2 + Math.random()*1.8) + "s");
      piece.style.setProperty("--drift",(-90 + Math.random()*180) + "px");
      piece.style.setProperty("--spin",((Math.random()>.5?1:-1)*(540 + Math.random()*720)) + "deg");
      piece.style.animationDelay = (Math.random()*.45) + "s";
      celebrationLayer.appendChild(piece);
    }

    for(let i=0;i<24;i++){
      const cash = document.createElement("span");
      cash.className = "cash-piece";
      cash.textContent = "💵";
      cash.style.left = Math.random()*100 + "vw";
      cash.style.setProperty("--fall-time",(2.6 + Math.random()*1.7) + "s");
      cash.style.setProperty("--drift",(-70 + Math.random()*140) + "px");
      cash.style.animationDelay = (Math.random()*.6) + "s";
      celebrationLayer.appendChild(cash);
    }

    setTimeout(()=>{
      celebrationLayer.classList.remove("active");
      celebrationLayer.setAttribute("aria-hidden","true");
      celebrationLayer.innerHTML = "";
    },4600);
  }

  function updateProgress(source){
    if(!activeKey) return;

    // Keep the last valid progress state while a student is in the middle
    // of typing an incomplete tag/rule.
    if(getSyntaxErrorLines(source).size > 0) return;

    const jobs = getJobCompletion(source);
    const completeCount = jobs.filter(Boolean).length;
    const percent = 60 + completeCount * 8;

    progressFill.style.width = percent + "%";
    progressNumber.textContent = percent + "%";

    if(percent < 100){
      progressMessage.textContent = completeCount === 0
        ? "The previous developer completed 60%. Finish the final five jobs."
        : `${completeCount} of 5 jobs finished. Keep going — you're getting close.`;
    }else{
      progressMessage.textContent = "All five jobs complete. Your client project is ready!";
    }

    jobStatusGrid.querySelectorAll(".job-status").forEach((el,index)=>{
      el.classList.toggle("complete", jobs[index]);
    });

    if(percent === 100 && !completionShown){
      completionShown = true;

      // The 100% celebration replaces all regular client feedback.
      clearTimeout(reactionTimer);
      closeClientReaction();

      progressNumber.classList.remove("complete-pulse");
      progressNumber.getBoundingClientRect();
      progressNumber.classList.add("complete-pulse");

      // Give students a moment to see the progress bar reach 100%
      // before the celebration takes over.
      setTimeout(()=>{
        runCelebration();

        completionModal.classList.remove("open");
        completionModal.getBoundingClientRect();
        completionModal.classList.add("open");
        completionModal.setAttribute("aria-hidden","false");
      },1000);
    }
  }

  function evaluateClientChoices(source){
    if(!activeKey || reactionModal.classList.contains("open")) return;

    // Once the project reaches 100%, suppress normal happy/concerned
    // reactions so the only final popup is the super-happy client.
    if(getJobCompletion(source).every(Boolean)) return;

    // Do not judge a student's design choice while they are still typing
    // incomplete HTML/CSS. Wait until the syntax checker is clean first.
    const syntaxErrors = getSyntaxErrorLines(source);
    if(syntaxErrors.size > 0) return;

    const client = clients[activeKey];

    // A background on h2 creates a long isolated rectangle in these layouts.
    // The code is valid, but it is intentionally treated as a design-purpose check.
    const h2DesignAdds = newValidDeclarations("h2",source);
    if(h2DesignAdds["background-color"] && !reactionSeen.has("h2-background")){
      reactionSeen.add("h2-background");
      showClientReaction(
        "concern",
        "Try styling the heading itself",
        "That background color creates a long bar behind the section heading. For this job, use text-focused choices like color, size, font, alignment, or boldness instead.",
        false
      );
      return;
    }

    // Header feedback: only after a complete img src has been typed.
    // Header 1 is intentionally the identity-aligned option for each client.
    // Header 2 is intentionally the "purpose check" option.
    const completeHeaderDiv = source.match(/<div\b[^>]*>\s*<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>\s*<\/div>/i);
    if(completeHeaderDiv){
      const chosen = completeHeaderDiv[1].trim().toLowerCase();
      const headerKey = "header:" + chosen;

      if(!reactionSeen.has(headerKey)){
        reactionSeen.add(headerKey);

        if(chosen === "header1.png"){
          showClientReaction(
            "happy",
            "That header fits our identity!",
            "Nice choice. The colors and visual direction of this header connect closely to the Company's Identity Board."
          );
          return;
        }

        if(chosen === "header2.png"){
          showClientReaction(
            "concern",
            "Does this header match our identity?",
            "That is not the client-approved header for this project. Check the Header Resources and Company Identity Board, then use header1.png.",
            true
          );
          return;
        }

        showClientReaction(
          "concern",
          "Check the client resources",
          "That image is not one of the two header resources provided by your client. A web developer still has to work within the client's available assets.",
          false
        );
        return;
      }
    }

    // Only judge color declarations that are new or changed from the 60%-complete starter site.
    const colorDeclarations = extractColorDeclarations(source);
    for(const declaration of colorDeclarations){
      if(starterColorDeclarations.has(declaration.full)) continue;

      const key = declaration.property + ":" + declaration.value.toLowerCase();
      if(reactionSeen.has(key)) continue;

      reactionSeen.add(key);

      if(colorMatchesBoard(declaration.value, client)){
        showClientReaction(
          "happy",
          "That feels like our brand!",
          "Great choice. That color connects back to the Company Identity Board. Your website is starting to look like the business has a clear purpose."
        );
      }else{
        showClientReaction(
          "concern",
          "Does that color fit our purpose?",
          "That color is outside the Company's Identity Board. You can keep it if you have a strong business reason, or check the board again before deciding.",
          true
        );
      }
      return;
    }
  }

  function chooseClient(key){
    activeKey = key;
    clearTimeout(reactionTimer);
    reactionSeen = new Set();
    const client = clients[key];
    starterColorDeclarations = new Set(
      extractColorDeclarations(client.starter).map(item => item.full)
    );
    starterRuleDeclarations = parseSimpleRules(client.starter);
    completionShown = false;

    clientIcon.textContent = client.icon;
    clientName.textContent = client.name;
    clientTagline.textContent = client.tagline;

    codeEditor.value = client.starter;
    updateLineNumbers();
    updatePreview();
    updateProgress(client.starter);

    introScreen.classList.add("hidden");

    workspace.classList.remove("animate-in");
    workspace.classList.remove("hidden");

    // Force a real paint/reflow before applying the entrance class.
    workspace.getBoundingClientRect();
    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        workspace.classList.add("animate-in");
      });
    });

    window.scrollTo({top:0,behavior:"smooth"});
  }

  function escapeHTML(text){
    return text
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;");
  }

  function getSyntaxErrorLines(source){
    const lines = source.split("\n");
    const errors = new Set();

    // Locate style ranges first so closing </style> is treated as HTML,
    // not as CSS content.
    let inStyle = false;
    let cssRuleDepth = 0;
    let cssRuleStart = -1;
    let cssBuffer = "";

    lines.forEach((line, i)=>{
      const lower = line.toLowerCase();

      if(!inStyle && lower.includes("<style")){
        inStyle = true;
        return;
      }

      if(inStyle && lower.includes("</style")){
        // If a CSS rule was left open before </style>, mark the rule lines,
        // not the closing style tag.
        if(cssRuleDepth !== 0 && cssRuleStart >= 0){
          for(let j=cssRuleStart;j<i;j++){
            if(lines[j].trim()) errors.add(j);
          }
        }
        inStyle = false;
        cssRuleDepth = 0;
        cssRuleStart = -1;
        cssBuffer = "";
        return;
      }

      if(inStyle){
        const clean = line.replace(/\/\*.*?\*\//g,"");
        const trimmed = clean.trim();
        if(!trimmed) return;

        if(cssRuleDepth === 0){
          if(clean.includes("{")){
            cssRuleStart = i;
            cssBuffer = clean + "\n";
            cssRuleDepth += (clean.match(/{/g)||[]).length;
            cssRuleDepth -= (clean.match(/}/g)||[]).length;
          }else if(trimmed !== "}" && !trimmed.startsWith("/*")){
            errors.add(i);
          }
        }else{
          cssBuffer += clean + "\n";
          cssRuleDepth += (clean.match(/{/g)||[]).length;
          cssRuleDepth -= (clean.match(/}/g)||[]).length;
        }

        if(cssRuleStart >= 0 && cssRuleDepth === 0){
          const open = cssBuffer.indexOf("{");
          const close = cssBuffer.lastIndexOf("}");
          const body = cssBuffer.slice(open+1, close);

          body.split("\n").forEach((decl, offset)=>{
            const t = decl.replace(/\/\*.*?\*\//g,"").trim();
            if(!t) return;
            if(!t.includes(":")){
              errors.add(cssRuleStart + offset + 1);
              return;
            }
            const colon = t.indexOf(":");
            const prop = t.slice(0,colon).trim();
            const value = t.slice(colon+1).replace(/;+\s*$/,"").trim();

            if(!prop || !value || !CSS.supports(prop,value)){
              errors.add(cssRuleStart + offset + 1);
            }
          });

          cssRuleStart = -1;
          cssBuffer = "";
        }
        return;
      }
    });

    // HTML check, excluding lines that are inside <style> ... </style>.
    const voidTags = new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]);
    const stack = [];
    inStyle = false;

    lines.forEach((line, lineIndex)=>{
      const lower = line.toLowerCase();

      if(!inStyle && lower.includes("<style")){
        // Check opening style tag itself as HTML.
        const token = line.match(/<style\b[^>]*>/i);
        if(!token) errors.add(lineIndex);
        inStyle = true;
        return;
      }

      if(inStyle){
        if(lower.includes("</style")){
          if(!/<\/style\s*>/i.test(line)) errors.add(lineIndex);
          inStyle = false;
        }
        return;
      }

      const trimmed = line.trim();

      // Incomplete tag on this line.
      if(trimmed.includes("<") && !trimmed.includes(">")){
        errors.add(lineIndex);
      }

      const matches = line.match(/<\/?[A-Za-z][^>\n]*>/g) || [];
      matches.forEach(token=>{
        const closing = /^<\//.test(token);
        const nameMatch = token.match(/^<\/?\s*([A-Za-z][\w-]*)/);
        if(!nameMatch) return;
        const name = nameMatch[1].toLowerCase();

        // Quotes must balance inside the tag.
        const doubleQuotes = (token.match(/"/g)||[]).length;
        const singleQuotes = (token.match(/'/g)||[]).length;
        if(doubleQuotes % 2 !== 0 || singleQuotes % 2 !== 0){
          errors.add(lineIndex);
        }

        // Classroom rule: every inline CSS declaration must end with a semicolon.
        // Browsers often allow the final semicolon to be omitted, but this lab
        // intentionally requires the syntax students are being taught.
        const styleAttr = token.match(/\bstyle\s*=\s*(["'])([\s\S]*?)\1/i);
        if(styleAttr){
          const styleText = styleAttr[2].trim();
          if(styleText){
            const pieces = styleText.split(";").map(s=>s.trim()).filter(Boolean);
            const mustEndWithSemicolon = !styleText.endsWith(";");
            let badInline = mustEndWithSemicolon;

            pieces.forEach(piece=>{
              const colon = piece.indexOf(":");
              if(colon === -1){
                badInline = true;
                return;
              }
              const prop = piece.slice(0,colon).trim();
              const value = piece.slice(colon+1).trim();
              if(!prop || !value || !CSS.supports(prop,value)){
                badInline = true;
              }
            });

            if(badInline) errors.add(lineIndex);
          }
        }

        if(closing){
          if(voidTags.has(name)){
            errors.add(lineIndex);
            return;
          }
          const top = stack[stack.length-1];
          if(!top || top.name !== name){
            errors.add(lineIndex);
          }else{
            stack.pop();
          }
        }else if(!voidTags.has(name) && !/\/>$/.test(token)){
          stack.push({name,line:lineIndex});
        }
      });
    });

    stack.forEach(item=>errors.add(item.line));
    return errors;
  }

  function colorizeHTMLLine(line){
    const escapedText = (s, cls="tok-text") => `<span class="${cls}">${escapeHTML(s)}</span>`;

    if(/^\s*<!doctype/i.test(line)){
      return `<span class="tok-doctype">${escapeHTML(line)}</span>`;
    }
    if(/^\s*<!--/.test(line) || /-->\s*$/.test(line)){
      return `<span class="tok-comment">${escapeHTML(line)}</span>`;
    }

    let result = "";
    let last = 0;
    const tagRegex = /<\/?[A-Za-z][^>\n]*>/g;
    let m;

    while((m = tagRegex.exec(line))){
      if(m.index > last) result += escapedText(line.slice(last,m.index));

      const token = m[0];
      const closing = /^<\//.test(token);
      const selfClose = /\/>$/.test(token);
      const nameMatch = token.match(/^<\/?\s*([A-Za-z][\w-]*)/);

      if(!nameMatch){
        result += escapedText(token);
      }else{
        const tagName = nameMatch[1];
        const prefixMatch = token.match(/^<\/?\s*/)[0];
        result += `<span class="tok-bracket">${escapeHTML(prefixMatch)}</span>`;
        result += `<span class="tok-tag">${escapeHTML(tagName)}</span>`;

        let rest = token.slice(prefixMatch.length + tagName.length);
        const closePart = selfClose ? "/>" : ">";
        if(rest.endsWith(closePart)) rest = rest.slice(0,-closePart.length);

        // Attributes
        const attrRegex = /(\s+)([A-Za-z_:][\w:.-]*)(\s*=\s*)(".*?"|'.*?'|[^\s>]+)?/g;
        let attrLast = 0, am;
        while((am = attrRegex.exec(rest))){
          if(am.index > attrLast) result += escapedText(rest.slice(attrLast,am.index));
          result += escapeHTML(am[1]);
          const attrClass = am[2].toLowerCase() === "style" ? "tok-inline-style" : "tok-attr";
          result += `<span class="${attrClass}">${escapeHTML(am[2])}</span>`;
          result += `<span class="tok-punc">${escapeHTML(am[3])}</span>`;
          if(am[4]) result += `<span class="tok-attrval">${escapeHTML(am[4])}</span>`;
          attrLast = am.index + am[0].length;
        }
        if(attrLast < rest.length) result += escapedText(rest.slice(attrLast));

        result += `<span class="tok-bracket">${escapeHTML(closePart)}</span>`;
      }
      last = m.index + token.length;
    }

    if(last < line.length) result += escapedText(line.slice(last));
    return result || " ";
  }

  function colorizeCSSLine(line){
    const safe = escapeHTML(line);
    const trimmed = line.trim();

    if(!trimmed) return " ";
    if(trimmed.startsWith("/*") || trimmed.endsWith("*/") || trimmed.startsWith("*")){
      return `<span class="tok-comment">${safe}</span>`;
    }

    // Selector line or selector + opening brace.
    if(trimmed.includes("{") && !trimmed.includes(":")){
      const idx = line.indexOf("{");
      return `<span class="tok-selector">${escapeHTML(line.slice(0,idx))}</span>` +
             `<span class="tok-punc">{</span>` +
             escapeHTML(line.slice(idx+1));
    }

    if(trimmed === "}"){
      return `<span class="tok-punc">${safe}</span>`;
    }

    // CSS declaration.
    const colon = line.indexOf(":");
    if(colon !== -1){
      const before = line.slice(0,colon);
      const after = line.slice(colon+1);
      const semi = after.lastIndexOf(";");
      const value = semi >= 0 ? after.slice(0,semi) : after;
      const tail = semi >= 0 ? after.slice(semi) : "";
      return `<span class="tok-prop">${escapeHTML(before)}</span>` +
             `<span class="tok-punc">:</span>` +
             `<span class="tok-cssval">${escapeHTML(value)}</span>` +
             `<span class="tok-punc">${escapeHTML(tail)}</span>`;
    }

    return `<span class="tok-text">${safe}</span>`;
  }

  function updateSyntaxLayer(){
    const source = codeEditor.value;
    const errorLines = getSyntaxErrorLines(source);
    const lines = source.split("\n");
    let inStyle = false;

    const rendered = lines.map((line,index)=>{
      const lower = line.toLowerCase();
      let colored;

      if(!inStyle && lower.includes("<style")){
        colored = colorizeHTMLLine(line);
        inStyle = true;
      }else if(inStyle && lower.includes("</style")){
        colored = colorizeHTMLLine(line);
        inStyle = false;
      }else if(inStyle){
        colored = colorizeCSSLine(line);
      }else{
        colored = colorizeHTMLLine(line);
      }

      return errorLines.has(index)
        ? `<span class="syntax-error">${colored}</span>`
        : `<span class="syntax-ok">${colored}</span>`;
    }).join("\n");

    syntaxLayer.innerHTML = rendered + "\n";
    syntaxLayer.scrollTop = codeEditor.scrollTop;
    syntaxLayer.scrollLeft = codeEditor.scrollLeft;
  }

  function updateLineNumbers(){
    const count = Math.max(1, codeEditor.value.split("\n").length);
    lineNumbers.textContent = Array.from({length:count},(_,i)=>i+1).join("\n");
    updateSyntaxLayer();
  }

  function formatDocument(source){
    // Formats indentation only. It does NOT repair invalid HTML or CSS.
    const lines = source.replace(/\r\n?/g,"\n").split("\n");
    const output = [];
    const htmlStack = [];
    const voidTags = new Set([
      "area","base","br","col","embed","hr","img","input",
      "link","meta","param","source","track","wbr"
    ]);

    let inStyle = false;
    let cssDepth = 0;

    function pad(level){
      return "  ".repeat(Math.max(0, level));
    }

    function currentHtmlIndent(){
      return htmlStack.length;
    }

    for(const raw of lines){
      const line = raw.trim();

      // Preserve a single blank line, but not long runs of blanks.
      if(line === ""){
        if(output.length && output[output.length - 1] !== ""){
          output.push("");
        }
        continue;
      }

      const lower = line.toLowerCase();

      // ---------------- CSS inside <style> ----------------
      if(inStyle){
        if(/^<\/style\s*>/i.test(line)){
          inStyle = false;
          cssDepth = 0;

          // </style> closes the style element that was pushed earlier.
          if(htmlStack[htmlStack.length - 1] === "style"){
            htmlStack.pop();
          }

          output.push(pad(currentHtmlIndent()) + line);
          continue;
        }

        // Closing braces reduce CSS indentation before the line is printed.
        const leadingCloseCount = (line.match(/^}+/) || [""])[0].length;
        if(leadingCloseCount){
          cssDepth = Math.max(0, cssDepth - leadingCloseCount);
        }

        output.push(pad(currentHtmlIndent() + cssDepth) + line);

        // Update depth based on braces on this line.
        const opens = (line.match(/{/g) || []).length;
        const closes = (line.match(/}/g) || []).length;

        // Leading closes were already applied before printing.
        const remainingCloses = Math.max(0, closes - leadingCloseCount);
        cssDepth = Math.max(0, cssDepth + opens - remainingCloses);
        continue;
      }

      // ---------------- HTML ----------------

      // Doctype and comments do not affect indentation.
      if(/^<!doctype/i.test(line) || /^<!--/.test(line)){
        output.push(pad(currentHtmlIndent()) + line);
        continue;
      }

      // Closing HTML tag: pop before printing.
      const closeMatch = line.match(/^<\/\s*([A-Za-z][\w-]*)\s*>/);
      if(closeMatch){
        const closingTag = closeMatch[1].toLowerCase();

        // Pop back to the matching tag if possible.
        const idx = htmlStack.lastIndexOf(closingTag);
        if(idx !== -1){
          htmlStack.length = idx;
        }else if(htmlStack.length){
          htmlStack.pop();
        }

        output.push(pad(currentHtmlIndent()) + line);
        continue;
      }

      // Opening tag.
      const openMatch = line.match(/^<\s*([A-Za-z][\w-]*)\b[^>]*>/);
      if(openMatch){
        const tag = openMatch[1].toLowerCase();

        output.push(pad(currentHtmlIndent()) + line);

        // Enter CSS mode after <style>.
        if(tag === "style" && !/<\/style\s*>/i.test(line)){
          htmlStack.push("style");
          inStyle = true;
          cssDepth = 0;
          continue;
        }

        const sameLineClose = new RegExp("</\\s*" + tag + "\\s*>", "i").test(line);
        const selfClosing = /\/>\s*$/.test(line);

        if(!voidTags.has(tag) && !selfClosing && !sameLineClose){
          htmlStack.push(tag);
        }
        continue;
      }

      // Plain text inside an open HTML element.
      output.push(pad(currentHtmlIndent()) + line);
    }

    // Remove blank lines at start/end.
    while(output[0] === "") output.shift();
    while(output[output.length - 1] === "") output.pop();

    return output.join("\n");
  }

  function mapStudentResources(source){
    if(!activeKey) return source;
    const client = clients[activeKey];

    // Students use friendly filenames. The lab maps them to the hosted image URLs.
    return source
      .replace(/(["'])header1\.png\1/gi, `"${client.headers[0]}"`)
      .replace(/(["'])header2\.png\1/gi, `"${client.headers[1]}"`);
  }

  function enforceClassroomCSS(source){
    // Browsers allow some forgiving CSS syntax. For this lab, inline style
    // declarations only render when every declaration is valid AND ends in ;.
    return source.replace(/\bstyle\s*=\s*(["'])([\s\S]*?)\1/gi,(full,quote,styleText)=>{
      const trimmed = styleText.trim();
      if(!trimmed) return full;

      if(!trimmed.endsWith(";")){
        return `style=${quote}${quote}`;
      }

      const declarations = trimmed.split(";").map(s=>s.trim()).filter(Boolean);
      for(const decl of declarations){
        const colon = decl.indexOf(":");
        if(colon === -1) return `style=${quote}${quote}`;
        const prop = decl.slice(0,colon).trim();
        const value = decl.slice(colon+1).trim();
        if(!prop || !value || !CSS.supports(prop,value)){
          return `style=${quote}${quote}`;
        }
      }

      return full;
    });
  }

  function previewSafety(source){
    // The course is HTML/CSS focused. Remove script blocks from the preview only.
    // Student HTML and CSS are otherwise handed to the browser as written.
    return source.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi,"");
  }

  function updatePreview(){
    const raw = codeEditor.value;
    const mapped = mapStudentResources(raw);
    const classroomChecked = enforceClassroomCSS(mapped);
    const rendered = previewSafety(classroomChecked);

    // A tiny preview-only rule keeps large header images inside the browser area.
    // It does not correct student HTML/CSS or alter their written declarations.
    const theme = activeKey === "bakery"
      ? {
          page:"#FFFDFC",
          border:"#E8DDD6",
          cardBorder:"#E7D5C8",
          radius:"18px",
          buttonRadius:"999px",
          headerRadius:"14px"
        }
      : activeKey === "tech"
      ? {
          page:"#F7FAFC",
          border:"#D9E4EC",
          cardBorder:"#C9D9E5",
          radius:"10px",
          buttonRadius:"8px",
          headerRadius:"8px"
        }
      : {
          page:"#FAFAFA",
          border:"#DADDE2",
          cardBorder:"#D5D8DE",
          radius:"6px",
          buttonRadius:"6px",
          headerRadius:"6px"
        };

    const previewHelper = `
<style>
  * { box-sizing:border-box; }

  body {
    margin:0;
    padding:0 0 38px;
    background:${theme.page};
    line-height:1.55;
  }

  nav {
    padding:14px 18px;
    letter-spacing:.35px;
  }

  body > div:has(> img) {
    width:calc(100% - 32px);
    max-width:none;
    margin:16px auto 22px;
    padding:0;
    border:0;
    border-radius:${theme.headerRadius};
    box-shadow:none;
    overflow:hidden;
  }

  body > div:has(> img) > img {
    display:block;
    width:100%;
    height:230px;
    object-fit:cover;
  }

  h1 {
    max-width:900px;
    margin:12px auto 6px;
    padding:0 22px;
    line-height:1.12;
  }

  body > p {
    max-width:760px;
    margin:6px auto 22px;
    padding:0 24px;
  }

  h2 {
    max-width:820px;
    margin:26px auto 10px;
    padding:0 24px;
    line-height:1.2;
  }

  body > div:not(:has(> img)) {
    width:calc(100% - 48px);
    max-width:760px;
    margin:10px auto 24px;
    padding:18px 22px;
    border:1px solid ${theme.cardBorder};
    border-radius:${theme.radius};
    box-shadow:0 8px 22px rgba(20,32,48,.08);
  }

  body > div:not(:has(> img)) p {
    margin:0;
  }

  ul {
    width:calc(100% - 80px);
    max-width:620px;
    margin:10px auto 24px;
    padding-left:28px;
  }

  li {
    margin:7px 0;
  }

  button {
    display:block;
    min-width:180px;
    margin:14px auto 0;
    padding:12px 20px;
    border:0;
    border-radius:${theme.buttonRadius};
    cursor:pointer;
  }
</style>`;

    let doc = rendered;
    if(/<\/head\s*>/i.test(doc)){
      doc = doc.replace(/<\/head\s*>/i, previewHelper + "\n</head>");
    }else{
      doc = previewHelper + doc;
    }

    previewFrame.srcdoc = doc;
  }

  function schedulePreview(){
    clearTimeout(updateTimer);
    updateTimer = setTimeout(updatePreview,120);
  }

  codeEditor.addEventListener("paste",(event)=>{
    const clipboardText = event.clipboardData?.getData("text");
    if(!clipboardText) return;

    const trimmed = clipboardText.trim();
    const isHeaderResource = /^(header1\.png|header2\.png)$/i.test(trimmed);
    const isHexColor = /^#[0-9a-f]{3,8}$/i.test(trimmed);

    // When students copy a filename or HEX value from one of the lab modals,
    // paste only the actual value. This prevents hidden/trailing line breaks
    // from moving the caret to the next line.
    if(isHeaderResource || isHexColor){
      event.preventDefault();

      const start = codeEditor.selectionStart;
      const end = codeEditor.selectionEnd;
      codeEditor.setRangeText(trimmed,start,end,"end");

      updateLineNumbers();
      schedulePreview();

      clearTimeout(reactionTimer);
      reactionTimer = setTimeout(()=>{
        evaluateClientChoices(codeEditor.value);
      },550);
    }
  });

  codeEditor.addEventListener("input",()=>{
    updateLineNumbers();
    schedulePreview();
    updateProgress(codeEditor.value);

    clearTimeout(reactionTimer);
    reactionTimer = setTimeout(()=>{
      evaluateClientChoices(codeEditor.value);
    },550);
  });

  codeEditor.addEventListener("scroll",()=>{
    lineNumbers.scrollTop = codeEditor.scrollTop;
    syntaxLayer.scrollTop = codeEditor.scrollTop;
    syntaxLayer.scrollLeft = codeEditor.scrollLeft;
  });

  codeEditor.addEventListener("keydown",(event)=>{
    if(event.key === "Tab"){
      event.preventDefault();
      const start = codeEditor.selectionStart;
      const end = codeEditor.selectionEnd;
      codeEditor.setRangeText("  ",start,end,"end");
      updateLineNumbers();
      schedulePreview();
      updateProgress(codeEditor.value);

      clearTimeout(reactionTimer);
      reactionTimer = setTimeout(()=>{
        evaluateClientChoices(codeEditor.value);
      },550);
    }
  });

  document.querySelectorAll(".choose-btn").forEach(btn=>{
    btn.addEventListener("click",()=>chooseClient(btn.dataset.client));
  });

  function setDarkMode(enabled){
    document.body.classList.toggle("dark-mode", enabled);
    darkModeToggle.classList.toggle("on", enabled);
    darkModeToggle.setAttribute("aria-pressed", enabled ? "true" : "false");
    darkModeState.textContent = enabled ? "On" : "Off";
  }

  darkModeToggle.addEventListener("click",()=>{
    setDarkMode(!document.body.classList.contains("dark-mode"));
  });

  function openHowTo(){
    howToModal.classList.remove("open");
    howToModal.getBoundingClientRect();
    howToModal.classList.add("open");
    howToModal.setAttribute("aria-hidden","false");
  }

  function closeHowTo(){
    howToModal.classList.remove("open");
    howToModal.setAttribute("aria-hidden","true");
  }

  howToBtn.addEventListener("click", openHowTo);
  howToClose.addEventListener("click", closeHowTo);
  howToModal.addEventListener("click",(e)=>{
    if(e.target === howToModal) closeHowTo();
  });

  function closeCompletion(){
    completionModal.classList.remove("open");
    completionModal.setAttribute("aria-hidden","true");
  }

  completionClose.addEventListener("click", closeCompletion);
  completionContinue.addEventListener("click", closeCompletion);
  completionModal.addEventListener("click",(e)=>{
    if(e.target === completionModal) closeCompletion();
  });

  reactionClose.addEventListener("click", closeClientReaction);
  reactionContinue.addEventListener("click", closeClientReaction);
  reactionBoard.addEventListener("click",()=>{
    closeClientReaction();
    if(!activeKey) return;
    fillBoard();
    openModal(boardModal);
  });
  reactionModal.addEventListener("click",(e)=>{
    if(e.target === reactionModal) closeClientReaction();
  });

  formatCodeBtn.addEventListener("click",()=>{
    const before = codeEditor.value;
    const formatted = formatDocument(before);

    const pageX = window.scrollX;
    const pageY = window.scrollY;
    const editorScrollTop = codeEditor.scrollTop;
    const editorScrollLeft = codeEditor.scrollLeft;
    const oldStart = codeEditor.selectionStart;
    const oldEnd = codeEditor.selectionEnd;

    codeEditor.value = formatted;

    // Restore the caret near where the student was instead of sending it to the end.
    const newStart = Math.min(oldStart, formatted.length);
    const newEnd = Math.min(oldEnd, formatted.length);
    codeEditor.setSelectionRange(newStart, newEnd);

    updateLineNumbers();
    updateProgress(codeEditor.value);

    // Formatting only changes whitespace/indentation, so keep the existing
    // live preview untouched. This prevents the iframe from flashing/reloading.
    codeEditor.scrollTop = editorScrollTop;
    codeEditor.scrollLeft = editorScrollLeft;
    syntaxLayer.scrollTop = editorScrollTop;
    syntaxLayer.scrollLeft = editorScrollLeft;

    // Focus without allowing the browser to scroll the page to the caret.
    try{
      codeEditor.focus({preventScroll:true});
    }catch(e){
      codeEditor.focus();
    }

    window.scrollTo(pageX, pageY);

    requestAnimationFrame(()=>{
      codeEditor.scrollTop = editorScrollTop;
      codeEditor.scrollLeft = editorScrollLeft;
      syntaxLayer.scrollTop = editorScrollTop;
      syntaxLayer.scrollLeft = editorScrollLeft;
      window.scrollTo(pageX, pageY);
    });
  });

  resetBtn.addEventListener("click",()=>{
    if(!activeKey) return;
    clearTimeout(reactionTimer);
    reactionSeen = new Set();
    completionShown = false;
    celebrationLayer.classList.remove("active");
    celebrationLayer.innerHTML = "";
    starterColorDeclarations = new Set(
      extractColorDeclarations(clients[activeKey].starter).map(item => item.full)
    );
    starterRuleDeclarations = parseSimpleRules(clients[activeKey].starter);
    codeEditor.value = clients[activeKey].starter;
    updateLineNumbers();
    updatePreview();
    updateProgress(codeEditor.value);
  });

  switchBtn.addEventListener("click",()=>{
    activeKey = null;
    celebrationLayer.classList.remove("active");
    celebrationLayer.innerHTML = "";
    workspace.classList.remove("animate-in");
    workspace.classList.add("hidden");
    introScreen.classList.remove("hidden");
    window.scrollTo({top:0,behavior:"smooth"});
  });

  function fillBoard(){
    const c = clients[activeKey];
    document.getElementById("boardModalTitle").textContent = `${c.name} — Company Identity Board`;
    document.getElementById("ibLogo").textContent = c.icon;
    document.getElementById("ibCompany").textContent = c.name;
    document.getElementById("ibTagline").textContent = c.tagline;
    document.getElementById("ibMission").textContent = c.mission;
    document.getElementById("ibCustomer").textContent = c.customer;
    document.getElementById("ibProblem").textContent = c.problem;

    document.getElementById("ibColors").innerHTML = c.colors.map(color=>
      `<div class="swatch-wrap"><div class="swatch" style="background:${color}"></div><div class="hex">${color}</div></div>`
    ).join("");

    document.getElementById("ibPersonality").innerHTML = c.personality.map(item=>
      `<span class="tag">${item}</span>`
    ).join("");

    document.getElementById("ibFonts").innerHTML = c.fonts.map(font=>
      `<div class="font-card"><strong style="font-family:${font.stack}">${font.sample}</strong><span>${font.name}</span></div>`
    ).join("");

    document.getElementById("ibImages").innerHTML = c.imagery.map(item=>
      `<div class="image-note">${item}</div>`
    ).join("");

    document.getElementById("ibNotes").innerHTML = c.notes.map(note=>
      `<div class="ib-note"><strong>${note.title}:</strong><br>${note.text}</div>`
    ).join("");
  }

  function fillResources(){
    const c = clients[activeKey];
    document.getElementById("resourcesTitle").textContent = `${c.name} — Header Resources`;
    document.getElementById("resource1Img").src = c.headers[0];
    document.getElementById("resource2Img").src = c.headers[1];
  }

  function openModal(modal){
    modal.classList.remove("open");
    const card = modal.querySelector(".modal-card");
    if(card){
      card.style.animation = "none";
      card.getBoundingClientRect();
      card.style.animation = "";
    }
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
  }
  function closeModal(modal){
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
  }

  viewBoardBtn.addEventListener("click",()=>{
    if(!activeKey) return;
    fillBoard();
    openModal(boardModal);
  });

  viewResourcesBtn.addEventListener("click",()=>{
    if(!activeKey) return;
    fillResources();
    openModal(resourcesModal);
  });

  document.querySelectorAll("[data-close]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const modal = document.getElementById(btn.dataset.close);
      if(modal) closeModal(modal);
    });
  });

  [boardModal,resourcesModal].forEach(modal=>{
    modal.addEventListener("click",(event)=>{
      if(event.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown",(event)=>{
    if(event.key === "Escape"){
      closeModal(boardModal);
      closeModal(resourcesModal);
      closeHowTo();
      closeClientReaction();
      closeCompletion();
    }
  });
}

initializeLesson5Lab();