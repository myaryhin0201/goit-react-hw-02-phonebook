(this.webpackJsonpphonebook = this.webpackJsonpphonebook || []).push([
  [0],
  {
    38: function (e, t, n) {},
    39: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = n(1),
        a = n.n(o),
        r = n(14),
        c = n.n(r),
        i = n(10),
        l = n(5),
        s = n(15),
        u = n.n(s),
        d = n(3),
        b = Object(d.a)({
          ContactItem: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            '&:not(:last-child)': { marginBottom: '10px' },
          },
          ContactName: { minWidth: '150px' },
          ContactNumber: { width: '125px' },
          ContactButton: {
            border: ' 2px solid rgba(255,255,255,0.27)',
            borderRadius: '0px 10px 0px 10px',
            backgroundColor: 'purple',
            color: 'white',
            '&:hover, &:focus': {
              '.ContactItem': { backgroundColor: 'black' },
              backgroundColor: 'black',
            },
          },
        }),
        p = n(0),
        x = function (e) {
          var t = e.id,
            n = e.name,
            o = e.number,
            a = e.onDeleteContact,
            r = b();
          return Object(p.jsxs)('li', {
            className: r.ContactItem,
            children: [
              Object(p.jsx)('p', { className: r.ContactName, children: n }),
              Object(p.jsx)('p', { className: r.ContactNumber, children: o }),
              Object(p.jsx)('button', {
                className: r.ContactButton,
                onClick: function () {
                  return a(t);
                },
                children: 'Delete',
              }),
            ],
          });
        },
        m = Object(d.a)({
          ContactsList: {
            padding: '20px',
            width: '450px',
            border: '2px solid black',
            marginBottom: '20px',
          },
        }),
        j = function (e) {
          var t = e.contacts,
            n = e.onDeleteContact,
            o = m();
          return Object(p.jsx)('ul', {
            className: o.ContactsList,
            children:
              0 !== t.length
                ? t.map(function (e) {
                    var t = e.id,
                      o = e.name,
                      a = e.number;
                    return Object(p.jsx)(
                      x,
                      { id: t, name: o, number: a, onDeleteContact: n },
                      t,
                    );
                  })
                : Object(p.jsx)('p', {
                    children: 'This contact is not in the list',
                  }),
          });
        },
        h = n(9),
        f = n(13),
        O = Object(d.a)({
          Phonebook: {
            width: '450px',
            border: '2px solid black',
            padding: '10px 10px',
            '& button': {
              border: ' 2px solid rgba(136,31,136,0.87)',
              borderRadius: '20px 0px 20px 0px',
              backgroundColor: 'white',
              padding: '5px 30px',
              '&:hover, &:focus': {
                backgroundColor: 'indigo',
                borderColor: 'indigo',
                color: 'white',
                outline: 'none ',
              },
            },
          },
          PhonebookInput: {
            display: 'flex',
            width: '215px',
            flexDirection: 'column',
            marginBottom: '20px',
            '& span': { marginBottom: '10px', fontSize: '20px' },
            '& input': {
              minWidth: '225px',
              border: 'none',
              borderRadius: '10px',
              padding: '5px 15px',
              fontSize: '15px',
              '&:hover, &:focus': { outline: 'none' },
            },
          },
        }),
        g = { name: '', number: '' },
        C = function (e) {
          var t = e.onSubmit,
            n = O(),
            a = Object(o.useState)(g),
            r = Object(l.a)(a, 2),
            c = r[0],
            i = r[1],
            s = c.name,
            u = c.number,
            d = function (e) {
              var t = e.currentTarget,
                n = t.name,
                o = t.value;
              i(Object(f.a)(Object(f.a)({}, c), {}, Object(h.a)({}, n, o)));
            };
          return Object(p.jsxs)('form', {
            onSubmit: function (e) {
              e.preventDefault(),
                Object.values(c).some(function (e) {
                  return !e;
                }) || (t(s, u), i(g), e.currentTarget.reset());
            },
            className: n.Phonebook,
            children: [
              Object(p.jsxs)('label', {
                className: n.PhonebookInput,
                children: [
                  Object(p.jsx)('span', { children: 'Name' }),
                  Object(p.jsx)('input', {
                    type: 'text',
                    name: 'name',
                    pattern:
                      "^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",
                    title:
                      "\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",
                    required: !0,
                    placeholder: 'Enter your name',
                    onChange: d,
                  }),
                ],
              }),
              Object(p.jsxs)('label', {
                className: n.PhonebookInput,
                children: [
                  Object(p.jsx)('span', { children: 'Phone' }),
                  Object(p.jsx)('input', {
                    type: 'tel',
                    name: 'number',
                    pattern:
                      '(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})',
                    title:
                      '\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +',
                    required: !0,
                    placeholder: 'Enter your phone number',
                    onChange: d,
                  }),
                ],
              }),
              Object(p.jsx)('button', {
                type: 'submit',
                children: 'Add Contact',
              }),
            ],
          });
        },
        v = Object(d.a)({
          Filter: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: '20px',
            fontSize: '20px',
            width: '450px',
            '& input': {
              minWidth: '225px',
              border: 'none',
              borderRadius: '10px',
              paddingLeft: '15px',
              fontSize: '15px',
              '&:hover, &:focus': { outline: 'none' },
            },
          },
        }),
        k = function (e) {
          var t = e.value,
            n = e.onChange,
            o = v();
          return Object(p.jsxs)('label', {
            className: o.Filter,
            children: [
              Object(p.jsx)('span', { children: ' Find contact by name' }),
              Object(p.jsx)('input', { type: 'text', value: t, onChange: n }),
            ],
          });
        };
      k.defaultProps = { value: '' };
      var N = k,
        S = [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56699' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12699' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79151' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-2612' },
        ],
        w = function () {
          var e = Object(o.useState)(S),
            t = Object(l.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(o.useState)(''),
            c = Object(l.a)(r, 2),
            s = c[0],
            d = c[1];
          Object(o.useEffect)(function () {
            var e = JSON.parse(localStorage.getItem('contacts'));
            a(e);
          }, []),
            Object(o.useEffect)(
              function () {
                localStorage.setItem('contacts', JSON.stringify(n));
              },
              [n],
            );
          var b = s.toLowerCase(),
            x = n.filter(function (e) {
              return e.name.toLowerCase().includes(b);
            });
          return Object(p.jsxs)(p.Fragment, {
            children: [
              Object(p.jsx)('h2', { children: 'Phonebook' }),
              Object(p.jsx)(C, {
                onSubmit: function (e, t) {
                  if (
                    n.find(function (t) {
                      return t.name === e;
                    })
                  )
                    alert(''.concat(e, ' is already in contacts'));
                  else {
                    var o = { id: u.a.generate(), name: e, number: t };
                    a(function (e) {
                      return [o].concat(Object(i.a)(e));
                    });
                  }
                },
              }),
              Object(p.jsx)('h2', { children: 'Contacts' }),
              Object(p.jsx)(N, {
                value: s,
                onChange: function (e) {
                  d(e.currentTarget.value);
                },
              }),
              Object(p.jsx)(j, {
                contacts: x,
                onDeleteContact: function (e) {
                  a(function (t) {
                    return t.filter(function (t) {
                      return t.id !== e;
                    });
                  });
                },
              }),
            ],
          });
        },
        y = Object(d.a)({
          Container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px',
            '& h2': {
              display: 'inline-block',
              marginTop: '20px',
              marginBottom: '20px',
              fontSize: '35px',
              fontWeight: 'bold',
              backgroundImage:
                'linear-gradient(to left, violet, indigo, blue, green, black, orange, red)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
          },
        }),
        B = function (e) {
          var t = e.children,
            n = y();
          return Object(p.jsx)('div', { className: n.Container, children: t });
        },
        I = function (e) {
          var t = e.children;
          return Object(p.jsx)(B, { children: t });
        };
      var z = function () {
        return Object(p.jsx)(I, { children: Object(p.jsx)(w, {}) });
      };
      n(37), n(38);
      c.a.render(
        Object(p.jsx)(a.a.StrictMode, { children: Object(p.jsx)(z, {}) }),
        document.getElementById('root'),
      );
    },
  },
  [[39, 1, 2]],
]);
//# sourceMappingURL=main.6cb98449.chunk.js.map
