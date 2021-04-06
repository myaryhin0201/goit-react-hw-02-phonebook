(this.webpackJsonpphonebook = this.webpackJsonpphonebook || []).push([
  [0],
  {
    38: function (e, t, n) {},
    39: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = n(1),
        r = n.n(o),
        a = n(14),
        c = n.n(a),
        i = n(10),
        s = n(5),
        l = n(15),
        d = n.n(l),
        u = n(3),
        b = Object(u.a)({
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
            r = e.onDeleteContact,
            a = b();
          return Object(p.jsxs)('li', {
            className: a.ContactItem,
            children: [
              Object(p.jsx)('p', { className: a.ContactName, children: n }),
              Object(p.jsx)('p', { className: a.ContactNumber, children: o }),
              Object(p.jsx)('button', {
                className: a.ContactButton,
                onClick: function () {
                  return r(t);
                },
                children: 'Delete',
              }),
            ],
          });
        },
        m = Object(u.a)({
          ContactsList: {
            padding: '20px',
            width: '450px',
            border: '2px solid black',
            borderRadius: '10px',
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
                      r = e.number;
                    return Object(p.jsx)(
                      x,
                      { id: t, name: o, number: r, onDeleteContact: n },
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
        O = Object(u.a)({
          Phonebook: {
            width: '450px',
            border: '2px solid black',
            borderRadius: '10px',
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
            r = Object(o.useState)(g),
            a = Object(s.a)(r, 2),
            c = a[0],
            i = a[1],
            l = c.name,
            d = c.number,
            u = function (e) {
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
                }) || (t(l, d), i(g), e.currentTarget.reset());
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
                    onChange: u,
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
                    onChange: u,
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
        v = Object(u.a)({
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
      var w = k,
        N = [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56699' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12699' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79151' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-2612' },
        ],
        S = function () {
          var e = Object(o.useState)(N),
            t = Object(s.a)(e, 2),
            n = t[0],
            r = t[1],
            a = Object(o.useState)(''),
            c = Object(s.a)(a, 2),
            l = c[0],
            u = c[1];
          Object(o.useEffect)(function () {
            var e = JSON.parse(localStorage.getItem('contacts'));
            r(e);
          }, []),
            Object(o.useEffect)(
              function () {
                localStorage.setItem('contacts', JSON.stringify(n));
              },
              [n],
            );
          var b = l.toLowerCase(),
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
                      return t.name.toLowerCase() === e.toLowerCase();
                    })
                  )
                    alert(''.concat(e, ' is already in contacts'));
                  else {
                    var o = { id: d.a.generate(), name: e, number: t };
                    r(function (e) {
                      return [o].concat(Object(i.a)(e));
                    });
                  }
                },
              }),
              Object(p.jsx)('h2', { children: 'Contacts' }),
              Object(p.jsx)(w, {
                value: l,
                onChange: function (e) {
                  u(e.currentTarget.value);
                },
              }),
              Object(p.jsx)(j, {
                contacts: x,
                onDeleteContact: function (e) {
                  r(function (t) {
                    return t.filter(function (t) {
                      return t.id !== e;
                    });
                  });
                },
              }),
            ],
          });
        },
        y = Object(u.a)({
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
        return Object(p.jsx)(I, { children: Object(p.jsx)(S, {}) });
      };
      n(37), n(38);
      c.a.render(
        Object(p.jsx)(r.a.StrictMode, { children: Object(p.jsx)(z, {}) }),
        document.getElementById('root'),
      );
    },
  },
  [[39, 1, 2]],
]);
//# sourceMappingURL=main.67c9e9fd.chunk.js.map
