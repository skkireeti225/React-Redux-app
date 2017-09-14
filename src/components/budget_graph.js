import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class BudgetGraph extends Component {
  constructor(props) {
    	super(props);
        this.chart = undefined;
    }

  componentDidMount() {
	this.chart = $(ReactDOM.findDOMNode(this.refs.chart)).highcharts({
            chart: {
                type: 'pie'
            },
            title: 'Browser Market sahre',
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            series: [{
                name: 'Browsers',
                data: this.props.data,
                size: '100%',
                innerSize: '85%',
                showInLegend:true,
                dataLabels: {
                    enabled: true
                }
            }]
        });
  }



  render() {
      return (
        <div>
          <h4 className="text-center">Budget Share</h4>
          <div ref='chart'>
          </div>
        </div>

      )
  }
}

export default BudgetGraph ;
