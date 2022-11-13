from django.shortcuts import render
from .models import Category, Stock, Video, Contacts
# Create your views here.
def index_view(request):
    category = Category.objects.all()
    video = Video.objects.all()
    stock = Stock.objects.all()
    context = {
        'category': category,
        'videos': video,
        'stocks': stock

    }
    return render(request=request, template_name='index.html', context=context)

def stock(request):
    stock = Stock.objects.all()
    context = {'stocks': stock,}
    return render(request=request, template_name='aksiya.html', context=context)

def stock_detail(request, pk):
    stock = Stock.objects.get(id=pk)
    context = {'stock': stock,}
    return render(request=request, template_name='page/stock_detail.html', context=context)

def video(request):
    video = Video.objects.all()
    context = {'videos': video}
    return render(request=request, template_name='video.html', context=context)

def shipping(request):
    return render(request=request, template_name='page/shipping.html')

def contact(request):
    if request.method == 'POST':
        data = request.POST
        Contacts.objects.create(
            full_name = data['ContactForm[name]'],
            email = data['ContactForm[email]'],
            thema = data['ContactForm[subject]'],
            message = data['ContactForm[body]']
        )
    
    return render(request=request, template_name='page/contact.html')


def service_center(request):
    return render(request=request, template_name='page/service_center.html')

def feedback(request):
    if request.method == 'POST':
        data = request.POST
        Contacts.objects.create(
            full_name = data['Reviews[name]'],
            email = data['Reviews[email]'],
            thema = data['Reviews[phone]'],
            message = data['Reviews[body]']
        )
    return render(request=request, template_name='page/feedback.html')

def money_club(request):
    return render(request=request, template_name='page/money_club.html')

def address(request):
    return render(request=request, template_name='page/address.html')