# Formspree Contact Form Setup Guide

## Current Configuration

**Form ID:** `myzgzjwz`
**Your Email:** `pawartushar8485@gmail.com`

## Steps to Verify Formspree Setup

### 1. Check Formspree Dashboard
1. Go to https://formspree.io/
2. Log in with your account
3. Find form with ID: `myzgzjwz`
4. Check:
   - ✅ Form is activated
   - ✅ Email notifications are enabled
   - ✅ Correct recipient email: `pawartushar8485@gmail.com`

### 2. Verify Email Settings
1. In Formspree dashboard, click on your form
2. Go to **Settings** → **Email Notifications**
3. Make sure:
   - **Send email notifications** is ON
   - **Recipient email** is correct
   - **Reply-to email** is set to use submitter's email

### 3. Check Spam Folder
Sometimes Formspree emails go to spam. Check your:
- Gmail Spam folder
- Gmail Promotions tab
- Gmail Social tab

### 4. Test Submission
1. Go to your portfolio website
2. Fill out the contact form with test data
3. Click "Send Message"
4. You should see a success message
5. Check email within 1-2 minutes

### 5. Formspree Free Plan Limits
- **50 submissions per month** (Free plan)
- If you exceed this, upgrade to a paid plan

## Troubleshooting

### Issue: Not receiving emails

**Solution 1: Verify form activation**
- New forms need to be activated by clicking link in confirmation email
- Check the email address used when creating the Formspree form

**Solution 2: Check Formspree email settings**
```
Dashboard → Form → Settings → Email Notifications
- Enable "Send email notifications"
- Set recipient: pawartushar8485@gmail.com
```

**Solution 3: Test with Formspree's test endpoint**
- Go to Formspree dashboard
- Click "Send test email"
- If this works, the issue is with form integration

**Solution 4: Check form field names**
Current fields being sent:
- `firstname`
- `lastname`
- `email`
- `phone`
- `service`
- `message`

### Issue: Form shows success but no email

This usually means:
1. Formspree is receiving the data
2. But email notifications are disabled
3. Check Settings → Email Notifications in dashboard

### Issue: Form submission fails

Check browser console for errors:
1. Right-click → Inspect → Console tab
2. Submit the form
3. Look for red error messages

## Alternative: Email.js Integration

If Formspree doesn't work, you can switch to Email.js:

1. Sign up at https://www.emailjs.com/
2. Create email service
3. Get Service ID, Template ID, and Public Key
4. Replace Formspree code with Email.js

Let me know if you need help with Email.js integration!

## Current Form Configuration

```javascript
const [state, handleSubmit] = useForm("myzgzjwz");
```

Form endpoint: `https://formspree.io/f/myzgzjwz`

## Testing Checklist

- [ ] Form submits without errors
- [ ] Success message appears
- [ ] Email arrives at pawartushar8485@gmail.com
- [ ] Email contains all form fields
- [ ] Reply-to is set to submitter's email
- [ ] No spam/junk folder issues

---

**Need Help?**
If emails still don't arrive after checking all above, the issue might be:
1. Formspree account not verified
2. Form ID is incorrect
3. Email notifications disabled in Formspree dashboard

**Quick Fix:**
Create a new form in Formspree dashboard and use the new Form ID.
