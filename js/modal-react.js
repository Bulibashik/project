const e = React.createElement;
const root = ReactDOM.createRoot(document.getElementById('modal-root'));

function phoneMask(value) {
  const digits = value.replace(/\D/g, '');

  let result = '+7';

  if (digits.length > 1) result += ' (' + digits.substring(1,4);
  if (digits.length >= 5) result += ') ' + digits.substring(4,7);
  if (digits.length >= 8) result += '-' + digits.substring(7,9);
  if (digits.length >= 10) result += '-' + digits.substring(9,11);

  return result;
}


function Modal({ onClose }) {
  const [form, setForm] = React.useState({fio:'',email:'',phone:'',message:'',agree:false});

  function update(name,val){ setForm({...form,[name]:val}); }

async function submit(evn){
  evn.preventDefault();

  const data = new FormData();
  for (let key in form) data.append(key, form[key]);

  await fetch('https://formcarry.com/s/rKL4x1Gr5x1', {
    method: 'POST',
    body: data
  });

  onClose();
}


  return e('div',{className:'modal-overlay',onClick:onClose},
    e('div',{className:'modal-window',onClick:e=>e.stopPropagation()},
      e('form',{onSubmit:submit},
        e('input',{placeholder:'ФИО',value:form.fio,onChange:e=>update('fio',e.target.value)}),
        e('input',{placeholder:'Email',value:form.email,onChange:e=>update('email',e.target.value)}),
        e('input',{placeholder:'Телефон',value:form.phone,onChange:e=>update('phone',phoneMask(e.target.value))}),
        e('textarea',{placeholder:'Сообщение',value:form.message,onChange:e=>update('message',e.target.value)}),

        e('label',{className:'checkbox'},
          e('input',{
            type:'checkbox',
            checked:form.agree,
            onChange:e=>update('agree',e.target.checked),
            required:true
          }),
          ' Согласен с политикой обработки персональных данных'
        ),

        e('button',{className:'submit-btn'},'Отправить')

      )
    )
  );
}

function openModal(){ root.render(e(Modal,{onClose:()=>root.render(null)})); }

const openModalBtn = document.getElementById('openModal');
const heroBtn = document.getElementById('heroBtn');
const priceBtn = document.getElementById('openModal2');

if (openModalBtn) openModalBtn.onclick = openModal;
if (heroBtn) heroBtn.onclick = openModal;
if (priceBtn) priceBtn.onclick = openModal;
