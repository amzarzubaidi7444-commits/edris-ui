const toast = document.getElementById('toast');
    let toastTimer;
    function showToast(msg){
      toast.textContent = msg;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(()=>toast.classList.remove('show'), 1800);
    }

    let fluid = 850;
    const limit = 1200;
    const fluidCurrent = document.getElementById('fluidCurrent');
    const fluidBar = document.getElementById('fluidBar');
    const fluidLabel = document.getElementById('fluidLabel');

    function updateFluid(amount){
      fluid = Math.min(fluid + amount, 1800);
      fluidCurrent.textContent = fluid.toLocaleString();
      fluidBar.style.width = Math.min((fluid/limit)*100, 100) + '%';

      const remaining = limit - fluid;
      if(remaining > 0){
        fluidLabel.textContent = remaining.toLocaleString() + ' ml remaining';
        fluidLabel.style.color = '';
        fluidBar.style.background = 'linear-gradient(90deg, var(--cyan), var(--blue))';
      }else if(remaining === 0){
        fluidLabel.textContent = 'Configured daily limit reached';
        fluidLabel.style.color = '#FFC45A';
        fluidBar.style.background = 'linear-gradient(90deg, #FFD36C, #F5A524)';
      }else{
        fluidLabel.textContent = Math.abs(remaining).toLocaleString() + ' ml above configured limit';
        fluidLabel.style.color = '#FF9B9B';
        fluidBar.style.background = 'linear-gradient(90deg, #FF9D9D, #E5484D)';
      }
    }

    document.getElementById('addFluid').addEventListener('click', () => {
      updateFluid(150);
      showToast('150 ml added');
    });

    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        btn.classList.add('active');
        showToast(btn.dataset.label + ' selected');
      });
    });

    let light = false;
    document.getElementById('themeBtn').addEventListener('click', () => {
      light = !light;
      if(light){
        document.documentElement.style.setProperty('--bg','#EEF4FF');
        document.documentElement.style.setProperty('--bg-2','#DCE8FF');
        document.documentElement.style.setProperty('--glass','rgba(255,255,255,.48)');
        document.documentElement.style.setProperty('--glass-strong','rgba(255,255,255,.62)');
        document.documentElement.style.setProperty('--line','rgba(255,255,255,.42)');
        document.documentElement.style.setProperty('--text','#10213D');
        document.documentElement.style.setProperty('--muted','#5A6F92');
        document.documentElement.style.setProperty('--muted-2','#7085A7');
        document.body.style.background = 'radial-gradient(circle at 10% 5%, rgba(20,105,226,.16), transparent 25%), radial-gradient(circle at 90% 10%, rgba(98,226,255,.20), transparent 18%), linear-gradient(170deg, #F4F8FF 0%, #EAF1FF 46%, #DDE8FF 100%)';
        document.querySelectorAll('.glass, .glass-soft').forEach(el=>{
          el.style.background='linear-gradient(180deg, rgba(255,255,255,.58), rgba(255,255,255,.34))';
          el.style.borderColor='rgba(255,255,255,.58)';
        });
        document.querySelector('.frame').style.background='linear-gradient(180deg, rgba(255,255,255,.45), rgba(255,255,255,.20))';
        document.querySelector('.frame').style.borderColor='rgba(255,255,255,.58)';
        document.querySelector('.bottom-nav').style.background='linear-gradient(180deg, rgba(255,255,255,.68), rgba(255,255,255,.44))';
        document.querySelector('.bottom-nav').style.borderColor='rgba(255,255,255,.66)';
        document.querySelector('.hero').style.background='radial-gradient(circle at 85% 20%, rgba(98,226,255,.30), transparent 26%), linear-gradient(145deg, rgba(20,105,226,.72), rgba(38,43,106,.84))';
        showToast('Light glass mode enabled');
      }else{
        location.reload();
      }
    });
